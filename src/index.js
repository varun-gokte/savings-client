import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export const Context = React.createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
const URL = "https://savings-calculator-snowy.vercel.app";

root.render(
  <Context.Provider value={URL}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);
