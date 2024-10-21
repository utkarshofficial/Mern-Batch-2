import { createContext, useContext, useState } from "react"

const authContext = createContext()

const ContextProvider = ({children})=>{
    const [user, setUser] = useState(null)
    
    const login = (responseData)=>{
        // save token to localstorage
        localStorage.setItem('token', responseData.token);
        setUser(responseData.user)
    }

    return (
        <authContext.Provider value={{user, login}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext)
export default ContextProvider