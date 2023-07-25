import { useContext } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';

import './cart-dropdown.styles.jsx';
import { CartContext } from '../../contexts/cart.context.jsx';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
	const navigate = useNavigate();
	const { cartItems } = useContext(CartContext);

	const handleCheckoutBtn = () => {
		navigate('/checkout');
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={handleCheckoutBtn} buttonType={BUTTON_TYPE_CLASSES.base}>checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;