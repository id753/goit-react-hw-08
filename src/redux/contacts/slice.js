// contacts/slice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const sliceContacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })

      // очистка контактов
      //       logout живе в auth/operations.js, тому що це логіка авторизації.
      // У contacts/slice.js ми просто слухаємо його виконання, щоб очистити список контактів.
      // Не потрібно дублювати logout в contacts/operations.js, він вже є в auth/operations.js.
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export const contactsReducer = sliceContacts.reducer;
export const { setLoading, setError } = sliceContacts.actions;
