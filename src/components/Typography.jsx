import { Link } from 'react-router-dom';
import { styled, css } from 'stitches.config';

export const H1 = styled('h1', {
  color: '$blackState',
  fontSize: '$h1',
  fontFamily: '$serif',
  lineHeight: 1.05,
  marginBottom: '30px',
  fontWeight: '$6',
});
export const H2 = styled('h2', {
  color: '$blackState',
  fontFamily: '$serif',
  fontSize: '$h2',
  marginBottom: '30px',
  lineHeight: 1.2,
  fontWeight: '$6',
});
export const H3 = styled('h3', {
  color: '$blackState',
  fontFamily: '$serif',
  fontSize: '$h3',
  marginBottom: '30px',
  lineHeight: '1.4em',
  fontWeight: '$6',
});
export const H4 = styled('h4', {
  color: '$blackState',
  fontFamily: '$serif',
  fontSize: '$h4',
  lineHeight: '1.45em',
  marginBottom: '15px',
  fontWeight: '$6',
});
export const H5 = styled('h5', {
  color: '$blackState',
  fontFamily: '$serif',
  fontSize: '$h5',
  lineHeight: '1.4em',
  marginBottom: '15px',
  fontWeight: '$6',
});
export const H6 = styled('h6', {
  color: '$blackState',
  fontFamily: '$serif',
  fontSize: '$h6',
  textTransform: 'uppercase',
  fontWeight: '$6',
  marginBottom: '0.5rem',
});
export const P = styled('p', {
  color: '$blackState',
  marginBottom: '5px',
  variants: { lead: { true: { fontSize: '$lead', fontWeight: '$3' } } },
});
export const A = styled(Link, {
  fontWeight: 300,
  textDecoration: 'none',

  variants: {
    underline: {
      true: {
        '&:hover': { textDecorationLine: 'underline', textUnderlineOffset: '2px' },
      },
    },
    color: {
      default: { color: '$opacity8', '&:hover, &:focus': { color: '$opacity6' } },
      primary: { color: '$primary', '&:hover, &:focus': { color: '$primaryState' } },
      info: { color: '$info', '&:hover, &:focus': { color: '$infoState' } },
      success: { color: '$success', '&:hover, &:focus': { color: '$successState' } },
      warning: { color: '$warning', '&:hover, &:focus': { color: '$warningState' } },
      danger: { color: '$danger', '&:hover, &:focus': { color: '$dangerState' } },
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});
export const Span = styled('span', {});
export const Description = styled('div', {
  fontSize: '$lg',
  color: '$darkGray',
  fontWeight: '$3',
});
export const Category = styled('p', {
  textTransform: 'capitalize',
  fontWeight: '$4',
  color: '$mode8',
  fontSize: '$sm',
});
export const Blockquote = styled('blockquote', {
  border: '1px solid',
  padding: '20px',
  fontSize: '$blockquoteFontSize',
  lineHeight: 1.8,
  margin: '0 0 1rem',

  '& small': {
    fontSize: '$sm',
    textTransform: 'uppercase',
  },

  variants: {
    color: {
      primary: {
        borderColor: '$primary',
        color: '$primary',
        '& small': { color: '$primary' },
      },
      danger: {
        borderColor: '$danger',
        color: '$danger',
        '& small': { color: '$danger' },
      },
      default: {
        borderColor: '$mode28',
        color: '$mode1',
        '& small': { color: '$mode28' },
      },
      info: { borderColor: '$info', color: '$info', '& small': { color: '$info' } },
      success: {
        borderColor: '$success',
        color: '$success',
        '& small': { color: '$success' },
      },
      warning: {
        borderColor: '$warning',
        color: '$warning',
        '& small': { color: '$warning' },
      },
    },
  },
  defaultVariants: {
    color: 'default',
  },
});
export const Small = styled('small', {
  color: '$blackState',
  fontSize: '$small',
  fontWeight: '$4',
});

const listVariants = css({
  variants: {
    unstyled: {
      true: {
        paddingLeft: '0',
        listStyle: 'none',
      },
    },
    inline: {
      true: {
        paddingLeft: '0',
        listStyle: 'none',
        '& li': {
          display: 'inline-block',
        },
        '& li:not(:last-child)': {
          mr: '$2',
        },
      },
    },
  },
});
export const Ol = styled('ol', listVariants, {});
export const Ul = styled('ul', listVariants, {});
export const Li = styled('li', listVariants, {});

export const Pre = styled('pre', {
  color: '$blackState',
  display: 'block',
  fontSize: '87.5%',
  marginTop: '0',
  marginBottom: '1rem',
  overflow: 'auto',
  msOverflowStyle: 'scrollbar',
});
export const Code = styled('code', {
  color: '$pink',
  fontSize: '87.5%',
  wordWrap: 'break-word',
});
export const Hr = styled('hr', {
  border: 'none',
  width: '100%',
  height: '1px',
  backgroundColor: '$blackState',
  my: '1rem',
});
export const Vr = styled('div', {
  display: 'inline-block',
  alignSelf: 'stretch',
  width: '0.9px',
  minHeight: '1em',
  backgroundColor: '$blackState',
});
