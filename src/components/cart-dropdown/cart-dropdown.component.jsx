import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';

import './cart-dropdown.styles.jsx';
import { useNavigate } from 'react-router-dom';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { useEffect, useRef } from 'react';

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let dropdownRef = useRef();

  const cartItems = useSelector(selectCartItems);

  const handleCheckoutBtn = () => {
    navigate('/checkout');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        dispatch(setIsCartOpen(false));
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <CartDropdownContainer ref={dropdownRef}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleCheckoutBtn} buttonType={BUTTON_TYPE_CLASSES.base}>
        checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
