import React, { useContext } from 'react';
import {
    BrowserRouter, Routes,
    Route,
} from "react-router-dom";

import Chat from './views/Speech-to-text/speech-to-text';


const Routers = () => {

    return (
        <BrowserRouter>

        <Routes>

            <Route exact path="/" element={<Chat />} />

        </Routes>
        </BrowserRouter>
    );
};

export default Routers;