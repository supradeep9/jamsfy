import { createSlice } from "@reduxjs/toolkit";
const initial = {
  name: "",
};

const login = createSlice({
  name: "login",
  initialState: initial,
  reducers: {
    signIn(state, action) {
      state.name = action.payload.name;
    },
    logOut(state) {
      state = initial;
    },
  },
});

export const { signIn, logOut } = login.actions;
export default login;
