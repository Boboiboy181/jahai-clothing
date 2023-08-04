import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, CategoryTitle } from './category.styles';
import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
  const { category } = useParams<string>();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category as string]);

  useEffect(() => {
    setProducts(categoriesMap[category as string]);
  }, [category, categoriesMap]);

  window.scrollTo(0, 0);

  return (
    <Fragment>
      <CategoryTitle>{(category as string).toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
