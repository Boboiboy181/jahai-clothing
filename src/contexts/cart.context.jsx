import { createContext, useEffect, useState } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaseItemQuantity = (productToDelete) => {
    setCartItems(decreaseCartQuantity(cartItems, productToDelete));
  };

  const deleteItem = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    decreaseItemQuantity,
    deleteItem,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
