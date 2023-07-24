import { useContext } from 'react';
import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';

import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context.jsx';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button>checkout</Button>
        </div>
    );
};

export default CartDropdown;