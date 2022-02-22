import { Card } from 'components/Card';
import { H3 } from 'components/Typography';
import { styled } from 'stitches.config';

export const ProductDisplayCard = styled(Card, {
  position: 'relative',
  overflow: 'hidden',
  mt: '$7',
  paddingBottom: '$4',
  borderBottom: '1px solid $gray600',
});
export const StarRating = styled('svg', {
  '&:not(:last-child)': { marginRight: '$0p5' },
});
export const ProductList = styled('div', {});
export const ProductListCard = styled(Card, { position: 'relative', overflow: 'hidden' });

export const ProductCategory = styled('div', {});
export const ProductCategoryCard = styled(Card, {
  position: 'relative',
  overflow: 'hidden',
});
