import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { deleteItem, addItemToCart, decreaseItemQuantity } = useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const decreaseItemHandler = () => decreaseItemQuantity(cartItem);
  const deleteItemHandler = () => deleteItem(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt="" />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <button className='arrow' onClick={decreaseItemHandler}>&#10094;</button>
        <span className='value'>{quantity}</span>
        <button className='arrow' onClick={addItemHandler}>&#10095;</button>
      </span>
      <span className='price'>{price}</span>
      <button className='remove-button' onClick={deleteItemHandler}>&#10005;</button>
    </div>
  );
};

export default CheckoutItem;