// contacts/selectors.js
import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = (state) => state.contacts.loading;
export const selectIsError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector(
  (state) => state.contacts.items,
  (state) => state.filters.name,
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
