import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

// 2
const initialState = {
    user: { name: null, email: null }, 
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};
// 2
const slice = createSlice({
    name: "auth",
    initialState,
     
      // 6 далее регистр 7
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        // без запятой, не обьект
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })

    //   11 n heder 12
    .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
// 15 n authoperation
.addCase(logout.fulfilled, (state, action) => {
    // state.user = action.payload.user;
    // state.isLoggedIn = true;
    // state.token = action.payload.token;
    return initialState;
  })
        // 21
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.isLoggedIn = true;
            state.isRefreshing = false;
          })
          // 21 n auth selectors 22
          .addCase(refreshUser.pending, (state, action) => {
            state.isRefreshing = true;
          })
          .addCase(refreshUser.rejected, (state, action) => {
            state.isRefreshing = false;
          });
}
});

// 2 далее селекторс 3
export const authReducer = slice.reducer;
