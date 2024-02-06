import { useState } from "react"
import { UserContext } from "./appContext"

const UserProvider = ({children})=>{
    const [user,setUser ] = useState({
        username:"",
        userEmail : "",
        password : "",
        auth : false,
    })

    return (
        <UserContext.Provider
            value={{user,setUser}}
        >
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserProvider}