import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios';

const authContext = createContext()

const ContextProvider = ({children})=>{
    const [user, setUser] = useState(null)
    
    const login = (responseData)=>{
        // save token to localstorage
        localStorage.setItem('token', responseData.token);
        setUser(responseData.user)
    }

    const logout = ()=>{
        localStorage.removeItem('token')
        setUser(null)
        location.reload()
    }
    
    useEffect(()=>{
        const verifyUser = async ()=>{
            try {
                const apiURL = "http://localhost:5000/api/auth/verify"
                const response = await axios.get(apiURL, {
                    headers:{
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                if(response.data.success){
                    setUser(response.data.user)
                }else{
                    setUser(null)
                }
            } catch (error) {
                console.log(error)
            }
        }

        verifyUser()
    }, [])

    return (
        <authContext.Provider value={{user, login, logout}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext)
export default ContextProvider