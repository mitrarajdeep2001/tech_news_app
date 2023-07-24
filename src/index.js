import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { APPContextProvider } from "./Context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <APPContextProvider>
      <App />
    </APPContextProvider>
  </>
);
