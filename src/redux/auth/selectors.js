// 3 далее стор 4
export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

// 22 n app
export const selectIsRefreshing = state => state.auth.isRefreshing;