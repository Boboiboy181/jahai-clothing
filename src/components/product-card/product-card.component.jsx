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

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
