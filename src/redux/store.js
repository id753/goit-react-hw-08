import { configureStore } from "@reduxjs/toolkit";

import { filterReducer } from "./filters/slice.js";
import { contactsReducer } from "./contacts/slice.js";
import { authReducer } from "./auth/slice.js";
// 17 n mein 18, authoperation 19
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// 17

const persistConfig = {
  key: "auth-data",
  version: 1,
  // токен который выдал сервер сохранить в локалсторадж
  whitelist: ["token"],
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    contacts: contactsReducer,
// 17
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
