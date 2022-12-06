import React, { createContext, useState, useEffect} from "react";
export const UserContext = createContext();

export const UserContextProvider = (props) => {
    let authUserStr = localStorage.getItem('user');
    let user = JSON.parse(authUserStr);
    const [authUser,setAuthUser] = useState({
        email: user ? user.email : '',
        name: user ? user.name : '',
        id: user ? user.id : ''
    })
    useEffect( ()=>{
         authUserStr = JSON.stringify(authUser);
        localStorage.setItem("user", authUserStr);
    },[authUser])
    return(
        <UserContext.Provider value={{authUser,setAuthUser}} >
            {props.children}
        </UserContext.Provider> 
    )
}