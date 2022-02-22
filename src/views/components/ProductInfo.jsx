import { AiOutlineStar } from 'react-icons/ai/index';
import { HiOutlineChevronRight } from 'react-icons/hi/index';

import { ProductDisplayCard, StarRating } from 'components/Cards/Product';
import { Container } from 'components/Container';
import { Col, Row } from 'components/FlexGrid';
import { Image } from 'components/Image';
import { Flex } from 'components/Flex';
import { CardBody, CardCategory, CardDescription, CardHeader } from 'components/Card';
import { H3, H5, Span } from 'components/Typography';
import { ToggleGroup, ToggleGroupItem } from 'components/ToggleGroup';
import { Button } from 'components/Button';
import placeholder from 'assets/img/jacket.png';

const ProductInfo = ({ product }) => {
  return (
    <ProductDisplayCard>
      <Container variant='fluid'>
        <H5>Fashion club exclusive / Outdoor</H5>
        <Row>
          <Col col={{ '@initial': '12', '@md': '6' }}>
            <Image css={{ marginBottom: '$5' }} src={product.image} alt='Product Image' />
            <Row>
              <Col col={{ '@initial': '4' }}>
                <Image src={placeholder} alt='Product Image' />
              </Col>
              <Col col={{ '@initial': '4' }}>
                <Image src={placeholder} alt='Product Image' />
              </Col>
              <Col col={{ '@initial': '4' }}>
                <Image src={placeholder} alt='Product Image' />
              </Col>
            </Row>
          </Col>
          <Col col={{ '@initial': '12', '@md': '6' }}>
            <CardHeader>
              <CardCategory css={{ fontWeight: '$4', mb: '$4' }}>
                {product.category}
              </CardCategory>
              <H3 css={{ mb: '$2p5' }}>{product.title}</H3>
              <CardCategory css={{ fontWeight: '$4' }}>Gucci</CardCategory>
            </CardHeader>
            <CardBody>
              <CardDescription css={{ pb: '$6' }}>{product.description}</CardDescription>
              <Span
                css={{ fontFamily: '$serif', textDecoration: 'line-through', mr: '$5' }}
              >
                $45.00
              </Span>
              <Span css={{ fontFamily: '$serif', fontWeight: '$6', fontSize: '$h3' }}>
                ${product.price}
              </Span>
              <br />
              <ToggleGroup
                css={{ marginTop: '$5' }}
                type='single'
                defaultValue='M'
                aria-label='Product Size'
              >
                <ToggleGroupItem outlined value='S' aria-label='S'>
                  S
                </ToggleGroupItem>
                <ToggleGroupItem outlined value='M' aria-label='M'>
                  M
                </ToggleGroupItem>
                <ToggleGroupItem outlined value='L' aria-label='L'>
                  L
                </ToggleGroupItem>
                <ToggleGroupItem outlined value='XL' aria-label='XL'>
                  XL
                </ToggleGroupItem>
              </ToggleGroup>
              <Span css={{ display: 'block', marginTop: '$5', marginBottom: '$6' }}>
                <Button outlined>Add to bag</Button>
                <Button>Purchase now</Button>
              </Span>
              <Flex justify='between' css={{ padding: '$4 0' }}>
                <H5 css={{ margin: 0 }}>Product details</H5>
                <Span>
                  <Span
                    css={{
                      display: 'inline-block',
                      height: '$3',
                      width: '$3',
                      borderRadius: '50%',
                      backgroundColor: '$rose6',
                      marginRight: '$2',
                    }}
                  />
                  <Span
                    css={{
                      display: 'inline-block',
                      height: '$3',
                      width: '$3',
                      borderRadius: '50%',
                      backgroundColor: '$black',
                      marginRight: '$2',
                    }}
                  />
                  <Span
                    css={{
                      display: 'inline-block',
                      height: '$3',
                      width: '$3',
                      borderRadius: '50%',
                      backgroundColor: '$gray600',
                      marginRight: '$5',
                    }}
                  />
                  <HiOutlineChevronRight />
                </Span>
              </Flex>
              <Flex justify='between' css={{ padding: '$4 0' }}>
                <H5 css={{ margin: 0 }}>Product reviews</H5>
                <Span>
                  <StarRating as={AiOutlineStar} css={{ color: '$rose8' }} />
                  <StarRating as={AiOutlineStar} css={{ color: '$rose8' }} />
                  <StarRating as={AiOutlineStar} css={{ color: '$rose8' }} />
                  <StarRating as={AiOutlineStar} css={{ color: '$rose8' }} />
                  <StarRating as={AiOutlineStar} css={{ color: '$rose8' }} />
                  <Span css={{ marginRight: '$5 !important' }}>
                    {product.rating.rate} ({product.rating.count})
                  </Span>
                  <HiOutlineChevronRight />
                </Span>
              </Flex>
              <Flex justify='between' css={{ padding: '$4 0' }}>
                <H5 css={{ margin: 0 }}>Deliver information</H5>
                <Span>
                  <Span css={{ marginRight: '$5 !important' }}>Free shipping</Span>
                  <HiOutlineChevronRight />
                </Span>
              </Flex>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </ProductDisplayCard>
  );
};

export default ProductInfo;
