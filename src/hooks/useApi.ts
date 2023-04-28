import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const UseApi = () =>({
    validateToken: async (token:string) => {
        return {
            user: {id: 3, name: 'Luciano', email: 'lucianogato@gmail.com'}
        }
        const response = await api.post('/validate', { token })
        return response.data
    },

    signin: async (email:string, password: string) =>{
        return {
            user: {id: 3, name: 'Luciano', email: 'lucianogato@gmail.com'},
            token: '0918234gh90823'
        }
        const response = await api.post('/signin', { email, password })
        return response.data
    },
    logout: async() => {
        return { status: true }
        const response = await api.post('/logout')
        return response.data
    }
})