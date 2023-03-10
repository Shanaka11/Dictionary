/* 
    id: string (by default by mongodb),
    word: string,

    Validate whether 2 entered words are the same before inserting if so do not insert
*/

import mongoose from "mongoose";

export interface IWord {
    _id: string
    word: string
    author: string
}

interface WordDocument extends mongoose.Document {
    word: string
    author: string
}

const wordSchema = new mongoose.Schema<WordDocument>({
    word: String,
    author: String
})

const Word = mongoose.model<WordDocument>(`Word`, wordSchema)

export default Word