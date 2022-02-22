import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  body: {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    margin: '0',
    fontFamily: '$sans',
    fontSize: '$base',
    fontWeight: '$4',
    lineHeight: 1.5,
    color: '$black',
    textAlign: 'left',
    backgroundColor: '$lightBg',
  },
  'button, input, optgroup, select, textarea': {
    fontFamily: '$sans',
    margin: '0',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  },
  'button, input': { overflow: 'visible' },
  '*, :after, :before': { boxSizing: 'border-box' },
  'img, svg': { verticalAlign: 'middle' },
  img: {
    verticalAlign: 'middle',
    borderStyle: 'none',
    maxWidth: '100%',
  },
  figure: { margin: '0 0 1rem' },
  'h1, h2, h3, h4, h5, h6': { fontWeight: '$4', marginTop: '0' },
  p: { marginTop: '0' },
});
