import { AiOutlineStar } from 'react-icons/ai/index';
import { IoHeartOutline } from 'react-icons/io5/index';

import { StarRating, ProductList, ProductListCard } from 'components/Cards/Product';
import { Col, Row } from 'components/FlexGrid';
import { Image } from 'components/Image';
import { Flex } from 'components/Flex';
import { CardBody, CardDescription } from 'components/Card';
import { H3, H4, Span, A } from 'components/Typography';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';

const ProductLists = ({ title, products }) => {
  return (
    <ProductList>
      <Flex justify='between' align='center'>
        <H3 css={{ marginBottom: 0 }}>{title}</H3>
        <Button outlined>View all</Button>
      </Flex>
      <Flex direction='column'>
        {products.map((product) => (
          <ProductListCard key={product.id}>
            <CardBody>
              <Row>
                <Col col={{ '@initial': '12', '@sm': '4', '@md': '3' }}>
                  <Image
                    css={{ width: '100%' }}
                    src={product.image}
                    alt='Product Image'
                  />
                </Col>
                <Col col={{ '@initial': '12', '@sm': '8', '@md': '9' }}>
                  <A to={`/${product.id}`}>
                    <H4>{product.title}</H4>
                  </A>
                  <CardDescription css={{ pb: '$4' }}>
                    {product.description}
                  </CardDescription>
                  <Span
                    css={{
                      fontFamily: '$serif',
                      textDecoration: 'line-through',
                      mr: '$5',
                    }}
                  >
                    $45.00
                  </Span>
                  <Span css={{ fontFamily: '$serif', fontWeight: '$6', fontSize: '$h4' }}>
                    ${product.price}
                  </Span>
                  <br />
                  <Span css={{ display: 'block', marginTop: '$4', marginBottom: '$4' }}>
                    <StarRating as={AiOutlineStar} css={{ color: '$rose8' }} />
                    <StarRating as={AiOutlineStar} css={{ color: '$rose8' }} />
                    <StarRating as={AiOutlineStar} css={{ color: '$rose8' }} />
                    <StarRating as={AiOutlineStar} css={{ color: '$rose8' }} />
                    <StarRating as={AiOutlineStar} css={{ color: '$rose8' }} />
                    <Span css={{ marginRight: '$5 !important' }}>
                      {product.rating.rate} ({product.rating.count})
                    </Span>
                    <Span css={{ '& svg': { height: '$5', width: '$5' } }}>
                      <IoHeartOutline />
                    </Span>
                  </Span>
                  <Button outlined>Add to bag</Button>
                </Col>
              </Row>
            </CardBody>
          </ProductListCard>
        ))}
      </Flex>
    </ProductList>
  );
};

export default ProductLists;
