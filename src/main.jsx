import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* 1  18*/}
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
    </PersistGate>
  </Provider>
);
