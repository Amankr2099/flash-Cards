import { useState } from "react"
import { appContext } from "./myContext";





export const ContextProvider = ({ children }) => {
    const [theme,setTheme] = useState()
    const [user,setUser ] = useState({
        username:"",
        userEmail : "",
        password : "",
        auth : false,
    })

    
    return (
        <appContext.Provider
            value={{
                user,
                setUser,
                theme,
                setTheme,
                
            }}
        >
            {children}
        </appContext.Provider>
    )
}
