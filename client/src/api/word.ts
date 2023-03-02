import { IWord } from "../types/IWord"
import { api } from './'

const getWords = async () => {
    return api.get<IWord[]>(`word`)
}

const addWords = async (data:IWord) => {
    return api.post<IWord>(
        `word`,
        data
    )
}
export default {
    getWords,
    addWords
}