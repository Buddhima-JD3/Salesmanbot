import React from "react";
import Router from "./Router"
import axios from "axios";
<<<<<<< HEAD
import { AuthContextProvider } from "../src/context/AuthContext";
import { CartProvider } from "react-use-cart";

=======
import {AuthContextProvider} from "../src/context/AuthContext";
import {CartProvider} from "react-use-cart";
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907


axios.defaults.withCredentials = true;

function App() {
<<<<<<< HEAD
  return (
    <CartProvider>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </CartProvider>
  );
=======
    return (
        <CartProvider>
            <AuthContextProvider>
                <Router/>
            </AuthContextProvider>
        </CartProvider>
    );
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
}

export default App;
