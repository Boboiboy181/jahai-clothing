import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  CheckoutContainer,
  CheckoutFooter,
  CheckoutHeader,
  EmptyMessageContainer,
  GotoPayment,
  HeaderBlock,
  Total,
} from './checkout.styles';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import { Link } from 'react-router-dom';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  window.scrollTo(0, 0);

  return !cartItems.length ? (
    <EmptyMessageContainer>
      <h1>Your cart is empty !</h1>
      <Link to="/shop">
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Back to shop</Button>
      </Link>
    </EmptyMessageContainer>
  ) : (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <CheckoutFooter>
        <GotoPayment to="payment">
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
            Go to payment
          </Button>
        </GotoPayment>
        <Total>total: ${cartTotal}</Total>
      </CheckoutFooter>
    </CheckoutContainer>
  );
};

export default Checkout;
