'use client';

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from 'react';

const PIECES = ['northwest', 'north', 'northeast', 'southwest', 'south', 'southeast'];

/**
 * One-time viewport assembly for page sections. The real content is always in
 * the DOM and visible; six clipped paper pieces animate only after hydration.
 */
export function useAssemble<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setSeen(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, seen };
}

type AssembleProps = Omit<HTMLAttributes<HTMLElement>, 'children' | 'style'> & {
  as?: 'div' | 'article' | 'section';
  children: ReactNode;
  style?: CSSProperties;
  exiting?: boolean;
};

export function Assemble({
  as: Element = 'div',
  children,
  className = '',
  style,
  exiting = false,
  ...props
}: AssembleProps) {
  const { ref, seen } = useAssemble<HTMLElement>();
  return (
    <Element
      {...props}
      ref={ref as never}
      className={`assemble ${className}`.trim()}
      data-assemble-seen={seen ? 'true' : 'false'}
      data-assemble-exit={exiting ? 'true' : undefined}
      style={style}
    >
      <div className="assemble__content">{children}</div>
      <div className="assemble__pieces" aria-hidden="true">
        {PIECES.map((piece) => <span className={`assemble-piece assemble-piece--${piece}`} key={piece} />)}
      </div>
    </Element>
  );
}
