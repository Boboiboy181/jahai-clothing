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
        <div className='arrow' onClick={decreaseItemHandler}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={deleteItemHandler}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;