import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { client } from 'utils/api-client';
import ProductLists from './components/ProductLists';

const ProductsByCategory = () => {
  const { category } = useParams();
  const productsByCategory = useQuery({
    queryKey: ['products-by-category', category],
    queryFn: () => client(`products/category/${category}?limit=5`).then((data) => data),
  });
  return (
    <>
      {productsByCategory.isSuccess ? (
        <ProductLists
          title={`Products by Category: "${category}"`}
          products={productsByCategory.data}
        />
      ) : null}
    </>
  );
};

export default ProductsByCategory;
