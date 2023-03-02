import axios, { AxiosInstance } from "axios"
import wordApi from "./word"
import auth from "../auth/auth"


export const api:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})

api.interceptors.request.use(async (config) => {
    const token = await auth.currentUser?.getIdToken()
    console.log(token)
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export {
    wordApi
}