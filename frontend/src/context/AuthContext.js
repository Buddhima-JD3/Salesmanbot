
import React,{createContext, useContext, useEffect, useState} from 'react'
import auth from "../apis/modules/auth";

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setloggedIn] = useState({});

    async function getLogged(){
       try{
           const loggedInRes = await auth.currentUser();
           setloggedIn(loggedInRes.data.data);
       }catch (error){
           setloggedIn(null)
       }
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