import { useClient } from 'context/auth-context';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ProductInfo from './components/ProductInfo';
import ProductLists from './components/ProductLists';
import ProductCategories from './components/ProductCategories';

const ProductDetails = () => {
  const { id } = useParams();
  const client = useClient();
  const { data: product, isSuccess } = useQuery({
    queryKey: ['product', id],
    queryFn: () => client(`products/${id}?limit=10`).then((data) => data),
  });
  const categories = useQuery({
    queryKey: ['product-categories'],
    queryFn: () => client(`products/categories`).then((data) => data),
  });

  const productCategory = product?.category;
  const relatedProducts = useQuery({
    queryKey: ['products-by-category', productCategory],
    queryFn: () =>
      client(`products/category/${productCategory}?limit=5`).then((data) => data),
    enabled: !!productCategory,
  });

  return (
    <>
      {isSuccess ? <ProductInfo product={product} /> : null}
      {relatedProducts.isSuccess ? (
        <ProductLists title='Related Products' products={relatedProducts.data} />
      ) : null}
      {categories.isSuccess ? <ProductCategories categories={categories.data} /> : null}
    </>
  );
};

export default ProductDetails;
