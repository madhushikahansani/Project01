import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [authUser,setAuthUser] = useState({
        email: "hansi123@gmail.com",
        name: "Hansi",
        id:""
    })
    
    return(
        <UserContext.Provider value={{authUser,setAuthUser}} >
            {props.children}
        </UserContext.Provider> 
    )
}