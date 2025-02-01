import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchContacts } from "../contacts/operations";

// 5 n authslice 6
axios.defaults.baseURL = "https://connections-api.goit.global/";
// 16 также  в оперейшн контакт n store
export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// 5
export const register = createAsyncThunk(
  "auth/register",
  // credentials - реквизиты для входа - любое имя, но это данные для входа пароль, логин
  async (credentials, thunkApi) => {
    try {
      console.log("Sending credentials:", credentials); // Проверить, что отправляется
      const { data } = await axios.post("users/signup", credentials);
      // 16 также  в оперейшн контакт
      setAuthHeader(data.token);

      // 5
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// 9 n login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      console.log("Sending credentials:", credentials); // Проверить, что отправляется
      const { data } = await axios.post("users/login", credentials);
      // 16
      setAuthHeader(data.token);

      // 9
      return data;
    } catch (error) {
      console.error(
        "Error Details:",
        error.response ? error.response.data : error.message
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// 13 n heder 14
export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const { data } = await axios.post("users/logout");
    axios.defaults.headers.common.Authorization = ""; // Удаляем токен
    return data;
  } catch (error) {
    console.error(
      "Error Details:",
      error.response ? error.response.data : error.message
    );
    return thunkApi.rejectWithValue(error.message);
  }
});

// 19 n app
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (!savedToken) {
      return thunkApi.rejectWithValue("token is not exist");
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await axios.get("users/current");

      // Загружаем контакты после успешного обновления пользователя
      thunkApi.dispatch(fetchContacts());

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
