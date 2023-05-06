import { createSlice } from "@reduxjs/toolkit";

const initial = {
  cartItem: [],
  totalCount: 0,
};

const cart = createSlice({
  name: "cart",
  initialState: initial,
  reducers: {
    add(state, action) {
      const product = action.payload;
      const exist = state.cartItem.find((x) => x.id === product.id);
      if (exist) {
        exist.quantity++;
        exist.totalprice += product.price;
      } else {
        state.cartItem.push({
          id: product.id,
          price: product.price,
          quantity: 1,
          totalprice: product.price,
          name: product.title,
          img: product.image,
        });
      }
      state.totalCount++;
    },
    remove(state, action) {
      const id = action.payload;

      const existingItem = state.cartItem.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
        state.totalCount--;
      } else {
        existingItem.quantity--;
        existingItem.totalprice -= existingItem.price;
        state.totalCount--;
      }
    },
  },
});

export const { add, remove } = cart.actions;
export default cart;
