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
import Admin from './views/admin/admin-panel';
import AuthContext from "./context/AuthContext";

import Chat from './views/chat/Chat'
import SignIn from './views/chat/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'


const Routers = () => {
    const { loggedIn } = useContext(AuthContext);
    const [user] = useAuthState(auth);
    return (
        <Router>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/register"><ClientRegistration /></Route>
            <Route exact path="/owner-register"><OwnerRegistration /></Route>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/admin"><Admin /></Route>
            <Route exact path="/chat"><Chat /></Route>
            <>
                {user ? <Chat /> : <SignIn />}
            </>
            {
                loggedIn !== null && (<>
                    
                </>)
            }

            <Route exact path="/test"><ValidationSchemaExample /></Route>
        </Router>
    );
};

export default Routers;