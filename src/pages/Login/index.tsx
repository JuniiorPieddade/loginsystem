import { useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom' 
export const Login = ()=> {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = async() => {
        if(email && password) {
            console.log('primeiropassoHandle')
            const isLogged = await auth.signin(email, password)
            if(isLogged){
                console.log('navegar para private')
                navigate('/private')
            } else {
                alert("Ocorreu um erro")
            }
        }
    }
    return (
        <div>
            <h2>Página fechada</h2>

            <input 
                type="text"
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder="Digite seu email"
             />
            <input 
                type="password" 
                onChange={e => setPassword(e.target.value)}
                value={password} 
                placeholder="Digite sua senha"
             />

             <button onClick={handleLogin}>Logar</button>
        </div>
    )
}