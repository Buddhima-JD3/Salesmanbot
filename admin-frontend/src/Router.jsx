import React, { useContext } from 'react';
import AdminLandingPage from "./views/admin/admin-panel"
import { ValidationSchemaExample } from './views/Test'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Admin from './views/admin/admin-panel';
import AuthContext from "./context/AuthContext";

import AddProduct from './views/owner/home/addProduct';

import Customers from './views/admin/side-pages/customers';
import Itemsold from './views/admin/side-pages/itemsold';
import Orders from './views/admin/side-pages/orders';
import Products from './views/admin/side-pages/products';
import Users from './views/admin/side-pages/users';

const Routers = () => {
    const { loggedIn } = useContext(AuthContext);

    return (
        <Router>
            <Route exact path="/" component={AdminLandingPage} />

            <Route exact path="/admin"><Admin /></Route>
            
            <Route exact path="/customers"><Customers /></Route>
            <Route exact path="/itemsold"><Itemsold /></Route>
            <Route exact path="/orders"><Orders /></Route>
            <Route exact path="/products"><Products /></Route>
            <Route exact path="/users"><Users /></Route>

            <Route exact path="/add_product"><AddProduct /></Route>

            {
                loggedIn !== null && (<>                 
                    
                </>)
            }

            <Route exact path="/test"><ValidationSchemaExample /></Route>
        </Router>
    );
};

export default Routers;