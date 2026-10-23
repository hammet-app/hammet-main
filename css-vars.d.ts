import 'react';
/** Lets inline styles use CSS custom properties such as style={{ '--d': 1 }}. */
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
