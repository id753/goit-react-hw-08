import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthHeader } from "../auth/operations";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// Функция получения контактов
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Функция добавления контакта
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found");
    }
  
    setAuthHeader(token); // Убедимся, что токен установлен перед отправкой запроса

    try {
      const { data } = await axios.post("/contacts", body);
      return data;
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Функция удаления контакта
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found");
    }

    setAuthHeader(token); // Убедимся, что токен установлен перед отправкой запроса

    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data; // Возвращаем данные удаленного контакта
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
