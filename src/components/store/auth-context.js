import { createContext, useState } from "react";
import React from 'react'
const AuthContext = createContext(
    {
        token: "",
        isLoggedIn: false,
        login: (token)=>{},
        logout: ()=>{}
    
    }
)

export const AuthContextProvider = (props)=>{
    const [token, setToken] = useState();
    

    const loginHandler = (token) =>{
        setToken(token);
    }
    const logoutHandler = () =>{
        setToken(null);
    }

    const authContextValue = {
        token: token,
        isLoggedIn : !!token,
        login: loginHandler,
        logout: logoutHandler,
    }
   
    return <AuthContext.Provider value={authContextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext