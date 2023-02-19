import axios from "axios"
import { IWord } from "../types/IWord"

const baseUrl = import.meta.env.VITE_BACKEND_URL

const getWords = async () => {
    return axios.get<IWord[]>(`${baseUrl}word`)
}

const addWords = async (data:IWord) => {
    return axios.post<IWord>(
        `${baseUrl}word`,
        data
    )
}
export default {
    getWords,
    addWords
}