import { styled } from 'stitches.config';

export const MainPanel = styled('div', {
  position: 'relative',
  background: '$lightBg',
  transition: 'all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)',

  '@xl': {
    transitionProperty: 'top, bottom, width',
    transitionDuration: '0.2s, 0.2s, 0.35s',
    transitionTimingFunction: 'linear, linear, ease',
    WebkitOverflowScrolling: 'touch',
  },
});
export const Content = styled('div', {
  pt: '150px',
  px: '25px',
  pb: '30px',
  minHeight: '100vh',
});
