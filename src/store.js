import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartSlice";
import login from "./loginSlice";
const store = configureStore({
  reducer: {
    cart: cart.reducer,
    login: login.reducer,
  },
});

export default store;
