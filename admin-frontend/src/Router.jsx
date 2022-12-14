import React, {useContext} from 'react';
import AdminLandingPage from "./views/admin/admin-panel"
import Admin from "./views/admin/admin-panel"
import {ValidationSchemaExample} from './views/Test'
import {BrowserRouter as Router, Route,} from "react-router-dom";
import AuthContext from "./context/AuthContext";

import Customers from './views/admin/side-pages/customers';
import Itemsold from './views/admin/side-pages/itemsold';
import Orders from './views/admin/side-pages/orders';
import Products from './views/admin/side-pages/products';
import Users from './views/admin/side-pages/users';
import {NavbarLayout} from "./layouts/Navbar";
import EditProduct from './views/admin/side-pages/editProduct';
import AddProduct from './views/admin/side-pages/addProduct';

const Routers = () => {
    const {loggedIn} = useContext(AuthContext);

    return (
        <Router>
            <NavbarLayout/>

            <Route exact path="/" component={AdminLandingPage}/>

            <Route exact path="/admin"><Admin/></Route>

            <Route exact path="/customers"><Customers/></Route>
            <Route exact path="/itemsold"><Itemsold/></Route>
            <Route exact path="/orders"><Orders/></Route>
            <Route exact path="/products"><Products/></Route>
            <Route exact path="/users"><Users/></Route>

            {
                loggedIn !== null && (<>

                </>)
            }

            <Route exact path="/test"><ValidationSchemaExample/></Route>
            <Route exact path="/editproduct/:id"><EditProduct/></Route>
            <Route exact path="/addproduct"><AddProduct/></Route>
        </Router>
    );
};

export default Routers;