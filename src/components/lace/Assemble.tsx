'use client';

import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

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
  return (
    <Element
      {...props}
      className={`assemble ${className}`.trim()}
      data-assemble-exit={exiting ? 'true' : undefined}
      style={style}
    >
      <div className="assemble__content">{children}</div>
    </Element>
  );
}
