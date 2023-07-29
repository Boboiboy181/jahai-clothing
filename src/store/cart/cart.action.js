import { createAction } from '../../Utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.type';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (!existingCartItem)
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  return cartItems.map((cartItem) =>
    cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

const changeCartQuantity = (cartItems, productToDelete) => {
  const newCartItems = cartItems.map((cartItem) =>
    cartItem.id === productToDelete.id
      ? cartItem.quantity > 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : {}
      : cartItem
  );
  return newCartItems.filter((cartItem) => cartItem.quantity > 0);
};

const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const changeItemQuantity = (cartItems, productToChange) => {
  const newCartItems = changeCartQuantity(cartItems, productToChange);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteItem = (cartItems, productToDelete) => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
