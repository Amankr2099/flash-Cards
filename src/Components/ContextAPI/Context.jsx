import { useState } from "react"
import { appContext } from "./myContext";





export const ContextProvider = ({ children }) => {
    const [theme,setTheme] = useState()
    const [cardCount,setcardCount] = useState(0)
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
                cardCount,
                setcardCount
            }}
        >
            {children}
        </appContext.Provider>
    )
}
