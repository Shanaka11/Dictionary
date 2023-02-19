import axios from "axios"
import { IWord } from "../types/IWord"

const getWords = async () => {
    return axios.get<IWord[]>(`${process.env.PORT}word`)
}

const addWords = async (data:IWord) => {
    return axios.post<IWord>(
        `${process.env.PORT}}word`,
        data
    )
}
export default {
    getWords,
    addWords
}