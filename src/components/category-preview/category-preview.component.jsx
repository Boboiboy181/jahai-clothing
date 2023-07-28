import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  Preview,
  PreviewTitle
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <PreviewTitle to={`${title}`}>{title.toUpperCase()}</PreviewTitle>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
