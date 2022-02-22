import React from 'react';
import { useClient } from 'context/auth-context';
import { useQuery } from 'react-query';
import ProductLists from 'views/components/ProductLists';

const AllProducts = () => {
  const client = useClient();
  const { data, isSuccess } = useQuery({
    queryKey: ['products'],
    queryFn: () => client(`products?limit=10`).then((data) => data),
  });
  return <>{isSuccess && <ProductLists title='All Products' products={data} />}</>;
};

export default AllProducts;
