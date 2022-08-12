import React from "react";
import Router from "./Router"
import axios from "axios";


axios.defaults.withCredentials = true;

function App() {
    return (
        <Router />
    );
}

export default App;