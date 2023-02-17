import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addCartItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalPrice = state.totalPrice + newItem.price;
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeCartItem: (state, action) => {
      const itemInCart = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === itemInCart.id
      );
      state.totalPrice = state.totalPrice - itemInCart.price;
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemInCart.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - itemInCart.price;
      }
    },
  },
});

export const cartItemsState = (state) => state.cart.items;
export const cartState = (state) => state.cart;
export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
