// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ContactList from "./components/ContactList/ContactList";
// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";

// import { addContact, deleteContact } from "./redux/contactsSlice";
// import { changeFilter } from "./redux/filters/slice";

import "./App.css";
// import {
//   addContact,
//   deleteContact,
//   fetchContacts,
// } from "./redux/contacts/operations";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/HomePage";
import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/RestrictedRoute";
import ContactsPage from "./pages/ContactsPage";
import RestrictedRoute from "./components/RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  // const contacts = useSelector((state) => state.contacts.items);
  // const filters = useSelector((state) => state.filters.name);

  // 23
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    // 20 n auth slice
    dispatch(refreshUser());
  }, [dispatch]);

  // 24 isRefreshing ? nul, далее создать приветроут 25
  return isRefreshing ? (
    <div>Loading...</div>
  ) : (
    <div>
      {/* <h1>Phonebook</h1> */}
      {/* // 2  n auth slice 3*/}
      <Routes>
        {/* каждый роут отвечает за страницу */}
        {/* создать пейджес папку и файлы */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <Register />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <Login />
              </RestrictedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filters} onChange={handleSearchChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      /> */}
    </div>
  );
}

export default App;
