import { createContext, useEffect, useState } from "react";

// function to add item to cart
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (!existingCartItem) return [...cartItems, { ...productToAdd, quantity: 1 }];
    return (
        cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    );
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, curr) => {
            return acc + curr.quantity;
        }, 0);
        setCartCount(newCartCount)
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};