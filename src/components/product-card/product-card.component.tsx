import { useDispatch, useSelector } from 'react-redux';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  Name,
  Price,
  ProductCartContainer,
  ProductCartFooter,
} from './product-card.styles';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { CartItem } from '../../store/cart/cart.type';
import { CategoryItem } from '../../store/categories/categories.type';

type ProductCardProps = {
  product: CartItem | CategoryItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product as CartItem));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCartFooter>
        <Name>{name}</Name>
        <Price>{`${price}$`}</Price>
      </ProductCartFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
