import { createContext, useReducer } from "react";
import { createAction } from "../Utils/reducer/reducer.utils";

// function to add item to cart
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

const decreaseCartQuantity = (cartItems, productToDelete) => {
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

const calculateCartItems = (cartItems) => {
  const cartCount = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const cartTotal = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  return {
    cartCount,
    cartTotal,
  };
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const CART_ACTION = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandle type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  const updateCartItems = (newCartItems) => {
    const newCartCalc = calculateCartItems(newCartItems);

    const payload = {
      cartItems: newCartItems,
      cartCount: newCartCalc.cartCount,
      cartTotal: newCartCalc.cartTotal,
    };

    dispatch(createAction(CART_ACTION.SET_CART_ITEMS, payload));
  };

  const setIsCartOpen = () => {
    dispatch(createAction(CART_ACTION.SET_IS_CART_OPEN, !isCartOpen));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };

  const decreaseItemQuantity = (productToDelete) => {
    const newCartItems = decreaseCartQuantity(cartItems, productToDelete);
    updateCartItems(newCartItems);
  };

  const deleteItem = (productToDelete) => {
    const newCartItems = deleteCartItem(cartItems, productToDelete);
    updateCartItems(newCartItems);
  };

  const value = {
    isCartOpen,
    cartItems,
    cartTotal,
    cartCount,
    setIsCartOpen,
    addItemToCart,
    decreaseItemQuantity,
    deleteItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
