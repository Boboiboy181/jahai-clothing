import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../Utils/reducer/reducer.utils';
import { CART_ACTION_TYPES, CartItem } from './cart.type';

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CartItem,
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  );
  if (!existingCartItem)
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  return cartItems.map((cartItem) =>
    cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem,
  );
};

const changeCartQuantity = (
  cartItems: CartItem[],
  productToDelete: CartItem,
): CartItem[] => {
  const newCartItems: CartItem[] = cartItems.map((cartItem) =>
    cartItem.id === productToDelete.id
      ? cartItem.quantity > 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : ({} as CartItem)
      : cartItem,
  );
  return newCartItems.filter((cartItem) => cartItem.quantity > 0);
};

const deleteCartItem = (
  cartItems: CartItem[],
  productToDelete: CartItem,
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean),
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems),
);

export const addItemToCart = withMatcher(
  (cartItems: CartItem[], productToAdd: CartItem): SetCartItems => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
  },
);

export const changeItemQuantity = withMatcher(
  (cartItems: CartItem[], productToChange: CartItem): SetCartItems => {
    const newCartItems = changeCartQuantity(cartItems, productToChange);
    return setCartItems(newCartItems);
  },
);

export const deleteItem = withMatcher(
  (cartItems: CartItem[], productToDelete: CartItem): SetCartItems => {
    const newCartItems = deleteCartItem(cartItems, productToDelete);
    return setCartItems(newCartItems);
  },
);
