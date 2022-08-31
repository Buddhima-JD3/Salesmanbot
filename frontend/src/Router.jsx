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

<<<<<<< HEAD
import Chat from './views/chat/chat';
=======
import Chat from './views/chat/Chat'
import SignIn from './views/chat/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907


const Routers = () => {
    const { loggedIn } = useContext(AuthContext);
<<<<<<< HEAD

=======
    const [user] = useAuthState(auth);
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
    return (
        <Router>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/register"><ClientRegistration /></Route>
            <Route exact path="/owner-register"><OwnerRegistration /></Route>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/admin"><Admin /></Route>
<<<<<<< HEAD

            <Route exact path="/chat"><Chat /></Route>
=======
            <Route exact path="/chat">{user ? <Chat /> : <SignIn />}</Route>
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907

            {
                loggedIn !== null && (<>
                    
                </>)
            }

            <Route exact path="/test"><ValidationSchemaExample /></Route>
        </Router>
    );
};

export default Routers;