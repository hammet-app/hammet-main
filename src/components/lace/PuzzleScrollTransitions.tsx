'use client';

import { useEffect } from 'react';

const SECTION_SELECTOR = '.lace-landing > header, .lace-landing > section';
const SVG_NS = 'http://www.w3.org/2000/svg';

type TransitionSurface = {
  surface: HTMLDivElement;
  edge: SVGSVGElement;
  edgeShadow: SVGPathElement;
  edgeHighlight: SVGPathElement;
  tabDepth: number;
};

type ScrollDirection = 'down' | 'up';

function sectionAtViewportCenter(sections: HTMLElement[]) {
  const center = window.innerHeight * 0.5;
  let nearestIndex = 0;
  let nearestDistance = Number.POSITIVE_INFINITY;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= center && rect.bottom > center) {
      nearestIndex = index;
      nearestDistance = 0;
      return;
    }
    const distance = Math.min(Math.abs(rect.top - center), Math.abs(rect.bottom - center));
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });

  return nearestIndex;
}

function copyInheritedStyles(source: HTMLElement, target: HTMLElement) {
  const computed = window.getComputedStyle(source);
  const targetStyle = target.style;

  // The live section inherits its theme and typography from the page wrapper.
  // Copy only those inherited values; its own class rules style the cloned tree.
  for (let index = 0; index < computed.length; index += 1) {
    const property = computed[index];
    if (property.startsWith('--')) {
      targetStyle.setProperty(property, computed.getPropertyValue(property));
    }
  }
  targetStyle.setProperty('color', computed.color);
  targetStyle.setProperty('font-family', computed.fontFamily);
  targetStyle.setProperty('font-size', computed.fontSize);
  targetStyle.setProperty('font-weight', computed.fontWeight);
  targetStyle.setProperty('line-height', computed.lineHeight);
}

function prepareSnapshot(section: HTMLElement, bounds: Pick<DOMRect, 'top' | 'left' | 'width' | 'height'>) {
  const snapshot = section.cloneNode(true) as HTMLElement;
  snapshot
    .querySelectorAll('script, .jigsaw-transition-surface, .jigsaw-transition-edge')
    .forEach((node) => node.remove());
  snapshot.removeAttribute('id');
  snapshot.querySelectorAll('[id]').forEach((node) => node.removeAttribute('id'));
  copyInheritedStyles(section, snapshot);

  snapshot.style.setProperty('position', 'absolute', 'important');
  snapshot.style.setProperty('inset', 'auto', 'important');
  snapshot.style.setProperty('top', `${bounds.top}px`, 'important');
  snapshot.style.setProperty('left', `${bounds.left}px`, 'important');
  snapshot.style.setProperty('width', `${bounds.width}px`, 'important');
  snapshot.style.setProperty('height', `${bounds.height}px`, 'important');
  snapshot.style.setProperty('min-height', '0', 'important');
  snapshot.style.setProperty('max-height', 'none', 'important');
  snapshot.style.setProperty('margin', '0', 'important');
  snapshot.style.setProperty('transform', 'none', 'important');
  snapshot.style.setProperty('transition', 'none', 'important');
  snapshot.style.setProperty('animation', 'none', 'important');
  snapshot.style.setProperty('overflow', 'visible', 'important');
  snapshot.setAttribute('aria-hidden', 'true');

  return snapshot;
}

function createTransitionSurface(section: HTMLElement, scrollDelta: number): TransitionSurface {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const liveBounds = section.getBoundingClientRect();
  // Scroll events run after the browser updates scrollY. Move the clone back
  // to its pre-scroll position so the outgoing surface is what was on screen
  // before the incoming section began to appear.
  const bounds = {
    top: liveBounds.top + scrollDelta,
    left: liveBounds.left,
    width: liveBounds.width,
    height: liveBounds.height,
  };
  const surface = document.createElement('div');
  surface.className = 'jigsaw-transition-surface';
  surface.style.width = `${width}px`;
  surface.style.height = `${height}px`;
  const pageBackground = document.querySelector<HTMLElement>('.lace-landing');
  surface.style.backgroundColor = pageBackground
    ? window.getComputedStyle(pageBackground).backgroundColor
    : '#fff';
  surface.setAttribute('aria-hidden', 'true');
  surface.append(prepareSnapshot(section, bounds));

  const edge = document.createElementNS(SVG_NS, 'svg');
  edge.classList.add('jigsaw-transition-edge');
  edge.setAttribute('viewBox', `0 0 ${width} ${height}`);
  edge.setAttribute('width', `${width}`);
  edge.setAttribute('height', `${height}`);
  edge.style.width = `${width}px`;
  edge.style.height = `${height}px`;
  edge.setAttribute('aria-hidden', 'true');
  edge.setAttribute('focusable', 'false');

  const edgeShadow = document.createElementNS(SVG_NS, 'path');
  edgeShadow.setAttribute('fill', 'none');
  edgeShadow.setAttribute('stroke', '#3B0764');
  edgeShadow.setAttribute('stroke-opacity', '.7');
  edgeShadow.setAttribute('stroke-width', '5');
  edgeShadow.setAttribute('stroke-linecap', 'round');
  edgeShadow.setAttribute('stroke-linejoin', 'round');

  const edgeHighlight = document.createElementNS(SVG_NS, 'path');
  edgeHighlight.setAttribute('fill', 'none');
  edgeHighlight.setAttribute('stroke', '#06B6D4');
  edgeHighlight.setAttribute('stroke-opacity', '.95');
  edgeHighlight.setAttribute('stroke-width', '1.6');
  edgeHighlight.setAttribute('stroke-linecap', 'round');
  edgeHighlight.setAttribute('stroke-linejoin', 'round');

  edge.append(edgeShadow, edgeHighlight);
  return {
    surface,
    edge,
    edgeShadow,
    edgeHighlight,
    tabDepth: Math.max(30, Math.min(88, width * 0.08)),
  };
}

function createBoundary(edgeY: number, width: number, height: number, depth: number, direction: ScrollDirection) {
  const centerX = width * 0.5;
  const halfTab = Math.max(42, Math.min(92, width * 0.12));
  const tabDirection = direction === 'down' ? 1 : -1;
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
  const surfacePath = direction === 'down'
    ? `${edgePath} L ${width} 0 L 0 0 Z`
    : `${edgePath} L ${width} ${height} L 0 ${height} Z`;

  return { edgePath, surfacePath };
}

function setBoundary(transition: TransitionSurface, edgeY: number, width: number, height: number, direction: ScrollDirection) {
  const { edgePath, surfacePath } = createBoundary(edgeY, width, height, transition.tabDepth, direction);
  transition.surface.style.clipPath = `path("${surfacePath}")`;
  transition.edgeShadow.setAttribute('d', edgePath);
  transition.edgeHighlight.setAttribute('d', edgePath);
}

export default function PuzzleScrollTransitions() {
  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));
    if (sections.length < 2) return;

    let activeIndex = sectionAtViewportCenter(sections);
    let lastScrollY = window.scrollY;
    let transitionFrame = 0;
    let transitionTimer = 0;
    let activeTransition: TransitionSurface | null = null;
    let inertRoot: HTMLElement | null = null;
    let previousInertState: boolean | null = null;

    const cleanupTransition = () => {
      window.clearTimeout(transitionTimer);
      cancelAnimationFrame(transitionFrame);
      transitionFrame = 0;
      activeTransition?.surface.remove();
      activeTransition?.edge.remove();
      activeTransition = null;
      if (inertRoot && previousInertState !== null) inertRoot.inert = previousInertState;
      inertRoot = null;
      previousInertState = null;
    };

    const startTransition = (outgoingIndex: number, direction: ScrollDirection, scrollDelta: number) => {
      cleanupTransition();
      if (motionPreference.matches) return;

      const transition = createTransitionSurface(sections[outgoingIndex], scrollDelta);
      activeTransition = transition;
      inertRoot = document.querySelector<HTMLElement>('.lace-landing');
      previousInertState = inertRoot?.inert ?? null;
      if (inertRoot) inertRoot.inert = true;

      document.body.append(transition.surface, transition.edge);
      transition.surface.addEventListener('pointerdown', blockInteraction, true);
      transition.surface.addEventListener('click', blockInteraction, true);
      transition.edge.addEventListener('pointerdown', blockInteraction, true);
      transition.edge.addEventListener('click', blockInteraction, true);

      const width = window.innerWidth;
      const height = window.innerHeight;
      const depth = transition.tabDepth;
      const startY = direction === 'down' ? height : 0;
      const endY = direction === 'down' ? -depth - 2 : height + depth + 2;
      const startedAt = performance.now();
      const duration = 1150;

      const animateBoundary = (now: number) => {
        if (activeTransition !== transition) return;
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = progress * progress * (3 - 2 * progress);
        setBoundary(transition, startY + (endY - startY) * eased, width, height, direction);

        if (progress < 1) {
          transitionFrame = requestAnimationFrame(animateBoundary);
        } else {
          cleanupTransition();
        }
      };

      setBoundary(transition, startY, width, height, direction);
      transitionFrame = requestAnimationFrame(animateBoundary);
      transitionTimer = window.setTimeout(cleanupTransition, duration + 450);
    };

    function blockInteraction(event: Event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      if (event.type !== 'pointerdown') event.preventDefault();
    }

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      if (scrollY === lastScrollY) return;

      const direction: ScrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      const scrollDelta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      const centeredIndex = sectionAtViewportCenter(sections);
      const nextIndex = direction === 'down'
        ? Math.max(activeIndex + 1, centeredIndex)
        : Math.min(activeIndex - 1, centeredIndex);
      if (nextIndex < 0 || nextIndex >= sections.length) return;

      const nextBounds = sections[nextIndex].getBoundingClientRect();
      // Trigger as soon as the adjacent section reaches the viewport edge.
      // Using each section's actual bounds adapts the transition to its height.
      const incomingHasEntered = direction === 'down'
        ? nextBounds.top <= window.innerHeight
        : nextBounds.bottom >= 0;
      if (!incomingHasEntered) return;

      const outgoingIndex = activeIndex;
      activeIndex = nextIndex;
      startTransition(outgoingIndex, direction, scrollDelta);
    };

    const handleResize = () => {
      cleanupTransition();
      activeIndex = sectionAtViewportCenter(sections);
      lastScrollY = window.scrollY;
    };
    const handleMotionPreferenceChange = () => {
      if (motionPreference.matches) cleanupTransition();
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', handleResize);
    motionPreference.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', handleResize);
      motionPreference.removeEventListener('change', handleMotionPreferenceChange);
      cleanupTransition();
    };
  }, []);

  return null;
}


