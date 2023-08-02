import { createSelector } from 'reselect';
import { CartItem } from './cart.type';
import { CartState } from './cart.reducer';

const selectCartReducer = (state): CartState => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen,
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems,
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc: number, curr: CartItem): number => acc + curr.quantity,
    0,
  ),
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc: number, curr: CartItem): number => acc + curr.price * curr.quantity,
    0,
  ),
);
