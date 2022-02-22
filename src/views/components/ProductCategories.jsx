import { ProductCategory, ProductCategoryCard } from 'components/Cards/Product';
import { Col, Row } from 'components/FlexGrid';
import { Figure, FigureCaption, FigureImg } from 'components/Image';
import placeholder from 'assets/img/emilyz.jpg';
import { Flex } from 'components/Flex';
import { A, H3 } from 'components/Typography';
import { Button } from 'components/Button';

const ProductCategories = ({ categories }) => {
  return (
    <ProductCategory css={{ marginTop: '$4' }}>
      <Flex justify='between' align='center' css={{ marginBottom: '$4' }}>
        <H3 css={{ marginBottom: 0 }}>Shop by categories</H3>
        <Button outlined>View all</Button>
      </Flex>
      <Row>
        {categories.map((category) => (
          <Col col={{ '@initial': '6', '@md': '4', '@lg': '3' }} key={category}>
            <ProductCategoryCard>
              <A to={`/category/${category}`}>
                <Figure>
                  <FigureImg src={placeholder} alt='Product Image' />
                  <FigureCaption>{category}</FigureCaption>
                </Figure>
              </A>
            </ProductCategoryCard>
          </Col>
        ))}
      </Row>
    </ProductCategory>
  );
};

export default ProductCategories;
