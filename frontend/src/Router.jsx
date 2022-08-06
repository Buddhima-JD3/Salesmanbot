import React, { useContext } from 'react';
import LandingPage from "./landing_page/landingPage"
import { Login } from "./views/auth/login"
import ClientRegistration from "./views/auth/clientRegistration"
import OwnerRegistration from "./views/auth/ownerRegistration"
import { ValidationSchemaExample } from './views/Test'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import ClientHome from './views/client/home/home';
import Admin from './views/admin/admin-panel';
import AddProduct from './views/owner/home/addProduct';
import OwnerHome from './views/owner/home/home';
import AuthContext from "./context/AuthContext";
import Cart from './views/client/cart/cart';

import Itemview from './views/itemview/itemview';
import EditProduct from './views/owner/home/editProduct';
import Payment from './views/client/payment/payment';
import Myorders from './views/client/my orders/myorders';
import Orders from './views/owner/home/orders';




const Routers = () => {
    const { loggedIn } = useContext(AuthContext);

    return (
        <Router>
            <Route exact path="/p"><Payment /></Route>

            <Route exact path="/login"><Login /></Route>
            <Route exact path="/register"><ClientRegistration /></Route>
            <Route exact path="/owner-register"><OwnerRegistration /></Route>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/admin"><Admin /></Route>

            {
                loggedIn !== null && (<>
                    <Route exact path="/homeclient"><ClientHome /></Route>
                    <Route exact path="/homeowner"><OwnerHome /></Route>
                    <Route exact path="/add-product"><AddProduct /></Route>
                    <Route exact path="/itemview/:id"><Itemview /></Route>
                    <Route exact path="/cart"><Cart /></Route>
                    <Route exact path="/edit-product/:id"><EditProduct /></Route>
                    <Route exact path="/payment"><Payment /></Route>
                    <Route exact path="/myorders"><Myorders /></Route>
                    <Route exact path="/orders"><Orders /></Route>
                </>)
            }

            <Route exact path="/test"><ValidationSchemaExample /></Route>
        </Router>
    );
};

export default Routers;