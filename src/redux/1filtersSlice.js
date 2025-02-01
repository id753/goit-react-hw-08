// filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "", // здесь хранится фильтр по имени
};

const sliceFilter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    //
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = sliceFilter.reducer;

//
export const { changeFilter } = sliceFilter.actions;

// **Селектор для отримання значення фільтра**
export const selectNameFilter = (state) => state.filters.name;
