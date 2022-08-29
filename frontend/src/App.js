import React from "react";
import Router from "./Router"
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import { CartProvider } from "react-use-cart";



axios.defaults.withCredentials = true;

function App() {
  return (
    <CartProvider>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </CartProvider>
  );
}

export default App;
