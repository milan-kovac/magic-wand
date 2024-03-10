import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem("token") ?? null,
    isLoggedin: sessionStorage.getItem("token") ? true : false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedin = true;
      sessionStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedin = false;
      sessionStorage.removeItem("token");
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
