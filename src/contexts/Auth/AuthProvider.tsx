import { UseApi } from "../../hooks/useApi"
import { User } from "../../types/user"
import { AuthContext } from "./AuthContext"
import { useState, useEffect } from 'react'

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null)
    const api = UseApi()

    useEffect(()=>{
        const validateToken = async() =>{
            const storageData = localStorage.getItem('authToken')
            if(storageData) {
                const data = await api.validateToken(storageData)
                if(data.user) {
                    setUser(data.user)
                }
            }
        }
        validateToken()
    },[api])

    const signin = async(email:string, password: string) => {
        const data = await api.signin(email, password)
        if(data.user && data.token) {
            setUser(data.user)
            return true
        }
        return false
    }

    const signout = async() =>{
        await api.logout()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}