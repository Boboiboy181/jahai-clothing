import { memo } from 'react';
import { CartItem } from '../../store/cart/cart.type';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

type CartItemProps = {
  cartItem: CartItem;
};

const CartItemComponent = memo(({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItemComponent;
