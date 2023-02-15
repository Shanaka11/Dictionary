import axios from "axios"
import { IWord } from "../types/IWord"

const getWords = async () => {
    return axios.get<IWord[]>(`http://localhost:5000/api/v1/word`)
}

const addWords = async (data:IWord) => {
    return axios.post<IWord>(
        'http://localhost:5000/api/v1/word',
        data
    )
}
export default {
    getWords,
    addWords
}