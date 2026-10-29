'use client';

import { useEffect } from 'react';

const SECTION_SELECTOR = '.lace-landing > header, .lace-landing > section';
const FOOTER_SELECTOR = '.lace-page-scope footer';
const SVG_NS = 'http://www.w3.org/2000/svg';

const ENABLE_QUERY =
  '(min-width: 300px) and (min-height: 520px) and (prefers-reduced-motion: no-preference)';

const AUTO_DURATION_MS = 950; // anchor links / PageUp / PageDown / Home / End
const SETTLE_QUIET_MS = 90; // swallow trackpad momentum after a transition completes
const BOUNDARY_PAUSE_MS = 200; // pause at the end of an internally scrolling page before handing over

type Direction = 'down' | 'up';
type InputSource = 'wheel' | 'touch' | 'key';

type Transition = {
  from: number;
  to: number;
  dir: Direction;
  progress: number;
  distance: number; // input pixels needed to complete a scrubbed transition
  auto: boolean; // true = time-driven (anchors, page keys); input is ignored
  width: number;
  height: number;
  tabDepth: number;
};

/* ───────────────────────── geometry ───────────────────────── */

function createBoundary(
  edgeY: number,
  width: number,
  height: number,
  depth: number,
  shape: Direction,
) {
  const centerX = width * 0.5;
  const halfTab = Math.max(38, Math.min(82, width * 0.115));
  const tabDirection = shape === 'down' ? 1 : -1;
  const tabDepth = depth * tabDirection;
  const left = centerX - halfTab;
  const right = centerX + halfTab;
  const edgePath = [
    `M 0 ${edgeY}`,
    `L ${left} ${edgeY}`,
    `C ${left + halfTab * 0.22} ${edgeY} ${left + halfTab * 0.2} ${edgeY + tabDepth * 0.78} ${centerX - halfTab * 0.34} ${edgeY + tabDepth * 0.78}`,
    `C ${centerX - halfTab * 0.14} ${edgeY + tabDepth * 0.78} ${centerX - halfTab * 0.3} ${edgeY + tabDepth} ${centerX} ${edgeY + tabDepth}`,
    `C ${centerX + halfTab * 0.3} ${edgeY + tabDepth} ${centerX + halfTab * 0.14} ${edgeY + tabDepth * 0.78} ${centerX + halfTab * 0.34} ${edgeY + tabDepth * 0.78}`,
    `C ${right - halfTab * 0.2} ${edgeY + tabDepth * 0.78} ${right - halfTab * 0.22} ${edgeY} ${right} ${edgeY}`,
    `L ${width} ${edgeY}`,
  ].join(' ');
  const upperPagePath = `${edgePath} L ${width} 0 L 0 0 Z`;
  const lowerPagePath = `${edgePath} L ${width} ${height} L 0 ${height} Z`;
  const outgoingPath = shape === 'down' ? upperPagePath : lowerPagePath;
  const incomingPath = shape === 'down' ? lowerPagePath : upperPagePath;

  return { edgePath, outgoingPath, incomingPath };
}

/**
 * Where the puzzle edge sits for a given progress (0 → 1), and which way the tab points.
 * `outgoing` is always the page being left, `incoming` the page being revealed.
 */
function boundaryGeometry(
  dir: Direction,
  progress: number,
  height: number,
  tabDepth: number,
): { shape: Direction; edgeY: number } {
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  // Scrolling DOWN: the next page rises from the bottom and covers the current page.
  if (dir === 'down') {
    return { shape: 'down', edgeY: lerp(height, -tabDepth - 2, progress) };
  }

  // Scrolling UP (active): mirror of down. The previous page descends from the top and
  // covers the current page.
  return { shape: 'up', edgeY: lerp(0, height + tabDepth + 2, progress) };

  // Scrolling UP (alternative, commented out): the CURRENT page pulls away from the top.
  // The edge travels upward exactly like the "down" transition, the current page is the
  // region above it (shrinking toward the top) and the previous page is revealed below it.
  // To use it, delete the active `return` above and uncomment this one:
  //
  //return { shape: 'down', edgeY: lerp(height, -tabDepth - 2, progress) };
}

/* ───────────────────────── helpers ───────────────────────── */

const stop = (event: Event) => {
  if (event.cancelable) event.preventDefault();
};

const canMove = (el: HTMLElement, dy: number) =>
  dy > 0 ? el.scrollTop + el.clientHeight < el.scrollHeight - 1 : el.scrollTop > 1;

const isScrollableY = (el: HTMLElement) => {
  const overflowY = window.getComputedStyle(el).overflowY;
  return (
    (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay') &&
    el.scrollHeight > el.clientHeight + 1
  );
}

/** First ancestor (starting at the event target) that can natively scroll in this direction. */
function findScroller(target: EventTarget | null, dy: number): HTMLElement | null {
  let el = target instanceof Element ? (target as HTMLElement) : null;
  while (el && el !== document.documentElement) {
    if (isScrollableY(el) && canMove(el, dy)) return el;
    el = el.parentElement;
  }
  return null;
}

function offsetInside(el: HTMLElement, container: HTMLElement) {
  return Math.max(
    0,
    el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - 12,
  );
}

function safeDecode(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/* ───────────────────────── engine ───────────────────────── */

function enablePuzzleScroll(): (() => void) | null {
  const landing = document.querySelector<HTMLElement>('.lace-landing');
  if (!landing) return null;

  const footer = document.querySelector<HTMLElement>(FOOTER_SELECTOR);
  const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));
  const normalFlowIndex = sections.findIndex((section) => section.id === 'events');
  const normalFlowStart = normalFlowIndex >= 0 ? sections[normalFlowIndex] : null;
  const normalFlowPages = normalFlowIndex >= 0
    ? [...sections.slice(normalFlowIndex), ...(footer ? [footer] : [])]
    : [];
  const pages = normalFlowIndex >= 0
    ? sections.slice(0, normalFlowIndex)
    : footer ? [...sections, footer] : sections;
  if (pages.length < 2) return null;

  const isNormalFlowTarget = (target: Element | null) =>
    Boolean(target && normalFlowPages.some((page) => page === target || page.contains(target)));

  const initialHash = safeDecode(window.location.hash.slice(1));
  if (initialHash && isNormalFlowTarget(document.getElementById(initialHash))) return null;

  const root = document.documentElement;
  const host = document.querySelector<HTMLElement>('.lace-page-scope') ?? document.body;
  const nav = document.querySelector<HTMLElement>('#nav');

  /* Pages must be opaque, otherwise a transparent section shows whatever is behind it. */
  const savedBackgrounds = pages.map((page) => page.style.backgroundColor);
  const landingBackground = window.getComputedStyle(landing).backgroundColor;
  pages.forEach((page) => {
    const background = window.getComputedStyle(page).backgroundColor;
    if (background === 'rgba(0, 0, 0, 0)' || background === 'transparent') {
      page.style.backgroundColor = landingBackground;
    }
    // data attributes survive React re-renders; className would be overwritten.
    page.setAttribute('data-puzzle-page', '');
  });
  footer?.setAttribute('data-puzzle-footer', '');

  /* The puzzle edge (shadow + cyan highlight), reused for every transition. */
  const edge = document.createElementNS(SVG_NS, 'svg');
  edge.classList.add('jigsaw-transition-edge');
  edge.setAttribute('aria-hidden', 'true');
  edge.setAttribute('focusable', 'false');
  const edgeShadow = document.createElementNS(SVG_NS, 'path');
  const edgeHighlight = document.createElementNS(SVG_NS, 'path');
  [
    [edgeShadow, '#3B0764', '.7', '5'],
    [edgeHighlight, '#06B6D4', '.95', '1.6'],
  ].forEach(([path, stroke, opacity, strokeWidth]) => {
    const el = path as SVGPathElement;
    el.setAttribute('fill', 'none');
    el.setAttribute('stroke', stroke as string);
    el.setAttribute('stroke-opacity', opacity as string);
    el.setAttribute('stroke-width', strokeWidth as string);
    el.setAttribute('stroke-linecap', 'round');
    el.setAttribute('stroke-linejoin', 'round');
  });
  edge.append(edgeShadow, edgeHighlight);
  host.append(edge);

  /* ───── state ───── */
  let index = 0;
  let tr: Transition | null = null;
  let rafId = 0;
  let settling = false;
  let settleStartedAt = 0;
  let lastWheelAt = 0;
  let lastInternalAt = 0;
  let lastTouchY: number | null = null;

  function measure() {
    const top = nav ? Math.max(0, Math.round(nav.getBoundingClientRect().bottom)) : 0;
    root.style.setProperty('--puzzle-top', `${top}px`);
    return { top, width: root.clientWidth, height: window.innerHeight - top };
  }

  function pageIndexOf(el: Element | null) {
    return el ? pages.findIndex((page) => page === el || page.contains(el)) : -1;
  }

  /** Resting state: only `current` is visible and interactive. */
  function showOnly(current: number) {
    pages.forEach((page, i) => {
      page.style.clipPath = '';
      page.style.zIndex = i === current ? '2' : '0';
      page.style.visibility = i === current ? 'visible' : 'hidden';
      page.inert = false;
    });
  }

  function applyProgress(progress: number) {
    if (!tr) return;
    tr.progress = Math.max(0, Math.min(progress, 1));
    const { dir, width, height, tabDepth } = tr;
    const geometry = boundaryGeometry(dir, tr.progress, height, tabDepth);
    const { edgePath, outgoingPath, incomingPath } = createBoundary(
      geometry.edgeY,
      width,
      height,
      tabDepth,
      geometry.shape,
    );
    pages[tr.from].style.clipPath = `path("${outgoingPath}")`;
    pages[tr.to].style.clipPath = `path("${incomingPath}")`;
    edgeShadow.setAttribute('d', edgePath);
    edgeHighlight.setAttribute('d', edgePath);
  }

  function finishTransition() {
    cancelAnimationFrame(rafId);
    tr = null;
    host.classList.remove('jigsaw-transition-active');
  }

  function cancelTransition() {
    if (!tr) return;
    finishTransition();
    showOnly(index);
  }

  function commitTransition(manual: boolean) {
    if (!tr) return;
    const leaving = pages[tr.from];
    const to = tr.to;
    finishTransition();
    index = to;
    showOnly(to);

    const active = document.activeElement as HTMLElement | null;
    if (active && leaving.contains(active)) active.blur();

    if (manual) {
      settling = true;
      settleStartedAt = performance.now();
    }
    lastInternalAt = 0;
    window.dispatchEvent(
      new CustomEvent('puzzle:pagechange', { detail: { index: to, id: pages[to].id || null } }),
    );
  }

  function startTransition(to: number, auto: boolean, anchor?: HTMLElement | null) {
    if (tr) cancelTransition();
    if (to === index || to < 0 || to >= pages.length) return false;

    const dir: Direction = to > index ? 'down' : 'up';
    const { top, width, height } = measure();
    const outgoing = pages[index];
    const incoming = pages[to];

    // Arrive at the anchor, otherwise at the edge the user is coming from.
    if (anchor && incoming.contains(anchor)) {
      incoming.scrollTop = offsetInside(anchor, incoming);
    } else {
      incoming.scrollTop = dir === 'down' ? 0 : incoming.scrollHeight;
    }

    // Only the two pages involved are visible; everything between them is skipped.
    pages.forEach((page) => {
      page.style.visibility = 'hidden';
    });
    outgoing.style.visibility = 'visible';
    incoming.style.visibility = 'visible';
    outgoing.style.zIndex = '2';
    incoming.style.zIndex = '3';
    outgoing.inert = true;
    incoming.inert = true;

    edge.setAttribute('viewBox', `0 0 ${width} ${height}`);
    edge.setAttribute('width', String(width));
    edge.setAttribute('height', String(height));
    edge.style.top = `${top}px`;
    edge.style.left = '0px';
    edge.style.width = `${width}px`;
    edge.style.height = `${height}px`;
    host.classList.add('jigsaw-transition-active');

    tr = {
      from: index,
      to,
      dir,
      progress: 0,
      distance: Math.max(360, Math.min(height, 900)),
      auto,
      width,
      height,
      tabDepth: Math.max(28, Math.min(76, width * 0.075)),
    };
    applyProgress(0);
    return true;
  }

  /** Scrubbed (input-driven) progress. */
  function advance(delta: number) {
    if (!tr || tr.auto) return;
    const next = tr.progress + (tr.dir === 'down' ? delta : -delta) / tr.distance;
    if (next <= 0) {
      cancelTransition();
      return;
    }
    if (next >= 1) {
      applyProgress(1);
      commitTransition(true);
      return;
    }
    applyProgress(next);
  }

  /** Time-driven progress for anchor links and page keys. */
  function runAuto() {
    if (!tr) return;
    const duration = AUTO_DURATION_MS + Math.min(Math.abs(tr.to - tr.from) - 1, 4) * 60;
    const startedAt = performance.now();
    const step = (now: number) => {
      if (!tr) return;
      const t = Math.max(0, Math.min(1, (now - startedAt) / duration));
      applyProgress(t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      if (t < 1) rafId = requestAnimationFrame(step);
      else commitTransition(false);
    };
    rafId = requestAnimationFrame(step);
  }

  /** One transition straight to `to`, however far away it is. */
  function goTo(to: number, anchor?: HTMLElement | null) {
    if (tr?.auto) return;
    if (tr) cancelTransition();
    if (to === index) {
      const page = pages[index];
      if (anchor && page.contains(anchor)) {
        page.scrollTo({ top: offsetInside(anchor, page), behavior: 'smooth' });
      }
      return;
    }
    if (startTransition(to, true, anchor)) runAuto();
  }

  /* ───── input ───── */

  function handleScrollInput(dy: number, target: EventTarget | null, event: Event, source: InputSource) {
    if (dy === 0) return;
    const now = performance.now();

    if (tr) {
      stop(event);
      advance(dy);
      return;
    }

    const page = pages[index];

    // Let the browser scroll the page (or something inside it) natively when it can.
    if (source !== 'key' && findScroller(target, dy)) {
      lastInternalAt = now;
      return;
    }

    // Input came from outside the page (nav) or from the keyboard: scroll the page by hand.
    if (canMove(page, dy)) {
      stop(event);
      page.scrollTop += dy;
      lastInternalAt = now;
      return;
    }

    const to = index + (dy > 0 ? 1 : -1);
    if (to >= pages.length && dy > 0 && normalFlowStart) {
      // Restore the document before the browser applies this same scroll input,
      // so Events through the footer continue as one normal page flow.
      releasePuzzleMode(normalFlowStart);
      return;
    }
    if (to < 0 || to >= pages.length) {
      stop(event);
      return;
    }

    // The page is at its edge: hand over to the puzzle transition.
    stop(event);

    const pageScrollsInternally = page.scrollHeight > page.clientHeight + 1;
    if (pageScrollsInternally && now - lastInternalAt < BOUNDARY_PAUSE_MS) {
      lastInternalAt = now; // still the same gesture that scrolled the page; wait for a fresh one
      return;
    }

    if (startTransition(to, false)) advance(dy);
  }

  function onWheel(event: WheelEvent) {
    if (event.ctrlKey || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
    const now = performance.now();
    const gap = now - lastWheelAt;
    lastWheelAt = now;

    if (settling) {
      if (gap > SETTLE_QUIET_MS || now - settleStartedAt > 800) settling = false;
      else {
        stop(event);
        return;
      }
    }

    const unit =
      event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? window.innerHeight
          : 1;
    handleScrollInput(event.deltaY * unit, event.target, event, 'wheel');
  }

  function onTouchStart(event: TouchEvent) {
    lastTouchY = event.touches[0]?.clientY ?? null;
  }

  function onTouchMove(event: TouchEvent) {
    const y = event.touches[0]?.clientY;
    if (y === undefined) return;
    const previous = lastTouchY;
    lastTouchY = y;
    if (previous === null) return;
    if (settling) {
      stop(event);
      return;
    }
    handleScrollInput(previous - y, event.target, event, 'touch');
  }

  function onTouchEnd() {
    lastTouchY = null;
    settling = false;
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target as HTMLElement | null;
    if (target && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))) return;

    const page = pages[index];
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        handleScrollInput(event.key === 'ArrowDown' ? 64 : -64, target, event, 'key');
        return;
      case 'PageDown':
      case 'PageUp':
      case ' ': {
        if (event.key === ' ' && target && ['BUTTON', 'A', 'SUMMARY'].includes(target.tagName)) return;
        if (tr) return;
        const dir = event.key === 'PageUp' || (event.key === ' ' && event.shiftKey) ? -1 : 1;
        if (canMove(page, dir)) {
          stop(event);
          page.scrollBy({ top: dir * page.clientHeight * 0.85, behavior: 'smooth' });
        } else if (dir > 0 && index === pages.length - 1 && normalFlowStart) {
          stop(event);
          releasePuzzleMode(normalFlowStart);
          window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'instant' as ScrollBehavior });
        } else {
          stop(event);
          goTo(index + dir);
        }
        return;
      }
      case 'Home':
        stop(event);
        goTo(0);
        return;
      case 'End':
        stop(event);
        goTo(pages.length - 1);
        return;
      default:
    }
  }

  /* ───── anchors ───── */

  function onClick(event: MouseEvent) {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = (event.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
    if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download')) return;

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
    if (!url.hash || url.hash === '#') return;

    const target = document.getElementById(safeDecode(url.hash.slice(1)));
    const to = pageIndexOf(target);
    if (target && isNormalFlowTarget(target)) {
      releasePuzzleMode();
      return;
    }
    if (!target || to < 0) return;

    // Prevent the default jump (and Next's Link handling, which bails on defaultPrevented).
    event.preventDefault();
    window.history.pushState(null, '', url.hash);
    goTo(to, target);
  }

  function onHashChange() {
    const id = safeDecode(window.location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;
    const to = pageIndexOf(target);
    if (target && isNormalFlowTarget(target)) {
      releasePuzzleMode(target as HTMLElement);
      return;
    }
    if (target && to >= 0) goTo(to, target);
    else if (!window.location.hash) goTo(0);
  }

  function onResize() {
    cancelTransition();
    measure();
  }

  let released = false;
  function releasePuzzleMode(anchor?: HTMLElement | null) {
    if (released) return;
    released = true;

    cancelTransition();
    window.removeEventListener('wheel', onWheel, true);
    window.removeEventListener('touchstart', onTouchStart, true);
    window.removeEventListener('touchmove', onTouchMove, true);
    window.removeEventListener('touchend', onTouchEnd, true);
    window.removeEventListener('touchcancel', onTouchEnd, true);
    window.removeEventListener('keydown', onKeyDown, true);
    window.removeEventListener('click', onClick, true);
    window.removeEventListener('hashchange', onHashChange);
    window.removeEventListener('resize', onResize);

    edge.remove();
    pages.forEach((page, i) => {
      page.removeAttribute('data-puzzle-page');
      page.removeAttribute('data-puzzle-footer');
      page.style.clipPath = '';
      page.style.zIndex = '';
      page.style.visibility = '';
      page.style.backgroundColor = savedBackgrounds[i];
      page.inert = false;
    });
    landing?.classList.remove('puzzle-active');
    root.classList.remove('puzzle-lock');
    root.style.removeProperty('--puzzle-top');
    host.classList.remove('jigsaw-transition-active');

    const destination = anchor ?? pages[index];
    if (destination) {
      window.scrollTo({
        top: destination.getBoundingClientRect().top + window.scrollY,
        behavior: 'instant' as ScrollBehavior,
      });
    }
  }

  /* ───── activate ───── */
  root.classList.add('puzzle-lock');
  landing.classList.add('puzzle-active');
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  measure();

  const initialId = safeDecode(window.location.hash.slice(1));
  const initialTarget = initialId ? document.getElementById(initialId) : null;
  const initialIndex = pageIndexOf(initialTarget);
  if (initialTarget && initialIndex >= 0) {
    index = initialIndex;
    showOnly(index);
    pages[index].scrollTop = offsetInside(initialTarget, pages[index]);
  } else {
    showOnly(0);
  }
  window.dispatchEvent(
    new CustomEvent('puzzle:pagechange', { detail: { index, id: pages[index].id || null } }),
  );

  window.addEventListener('wheel', onWheel, { capture: true, passive: false });
  window.addEventListener('touchstart', onTouchStart, { capture: true, passive: true });
  window.addEventListener('touchmove', onTouchMove, { capture: true, passive: false });
  window.addEventListener('touchend', onTouchEnd, { capture: true, passive: true });
  window.addEventListener('touchcancel', onTouchEnd, { capture: true, passive: true });
  window.addEventListener('keydown', onKeyDown, true);
  window.addEventListener('click', onClick, true);
  window.addEventListener('hashchange', onHashChange);
  window.addEventListener('resize', onResize);

  return () => releasePuzzleMode();
}

/* ───────────────────────── component ───────────────────────── */

export default function PuzzleScrollTransitions() {
  useEffect(() => {
    const query = window.matchMedia(ENABLE_QUERY);
    let teardown: (() => void) | null = null;

    const sync = () => {
      if (query.matches && !teardown) {
        teardown = enablePuzzleScroll();
      } else if (!query.matches && teardown) {
        teardown();
        teardown = null;
      }
    };

    sync();
    query.addEventListener('change', sync);
    return () => {
      query.removeEventListener('change', sync);
      teardown?.();
    };
  }, []);

  return null;
}
