import { styled } from '../stitches.config';

export const Flex = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',

  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
      rowReverse: { flexDirection: 'row-reverse' },
      columnReverse: { flexDirection: 'column-reverse' },
    },
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
      baseline: { alignItems: 'baseline' },
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
      evenly: { justifyContent: 'space-evenly' },
    },
    wrap: {
      noWrap: { flexWrap: 'nowrap' },
      wrap: { flexWrap: 'wrap' },
      wrapReverse: { flexWrap: 'wrap-reverse' },
    },
    gap: {
      0: { gap: '$0' },
      1: { gap: '$0p5' },
      2: { gap: '$1' },
      3: { gap: '$1p5' },
      4: { gap: '$2' },
      5: { gap: '$2p5' },
      6: { gap: '$3' },
      7: { gap: '$3p5' },
      8: { gap: '$4' },
      9: { gap: '$5' },
      10: { gap: '$6' },
      11: { gap: '$7' },
      12: { gap: '$8' },
      13: { gap: '$9' },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'center',
    wrap: 'noWrap',
  },
});
