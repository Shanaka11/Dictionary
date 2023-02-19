import axios from "axios"
import { IWord } from "../types/IWord"

const getWords = async () => {
    return axios.get<IWord[]>(`${process.env.VITE_BACKEND_URL}word`)
}

const addWords = async (data:IWord) => {
    return axios.post<IWord>(
        `${process.env.VITE_BACKEND_URL}}word`,
        data
    )
}
export default {
    getWords,
    addWords
}