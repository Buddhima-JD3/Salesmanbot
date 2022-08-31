<<<<<<< HEAD

import React,{createContext, useContext, useEffect, useState} from 'react'
=======
import React, {createContext, useEffect, useState} from 'react'
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
import auth from "../apis/modules/auth";

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setloggedIn] = useState({});

<<<<<<< HEAD
    async function getLogged(){
       try{
           const loggedInRes = await auth.currentUser();
           setloggedIn(loggedInRes.data.data);
       }catch (error){
           setloggedIn(null)
       }
=======
    async function getLogged() {
        try {
            const loggedInRes = await auth.currentUser();
            setloggedIn(loggedInRes.data.data);
        } catch (error) {
            setloggedIn(null)
        }
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
    }

    useEffect(() => {
        getLogged();
    }, [])

    return <AuthContext.Provider value={{loggedIn, getLogged}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;
export {AuthContextProvider}