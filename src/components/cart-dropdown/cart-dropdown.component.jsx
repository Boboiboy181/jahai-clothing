import { useContext } from 'react';
import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';

import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context.jsx';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);

    const handleCheckoutBtn = () => {
        navigate('/checkout');
    };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={handleCheckoutBtn}>checkout</Button>
        </div>
    );
};

export default CartDropdown;