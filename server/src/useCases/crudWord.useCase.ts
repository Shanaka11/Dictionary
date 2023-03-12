import { IWord, Word } from "../entities";
//@ts-ignore
import { validateWord } from "../utils/SpellChecker/spellCheck"

const add = async ( word:IWord, user?: string ) => {
    try {
        // Check if a word that has the same letters exist
        const checkExist = await Word.findOne({
            word: {
                $eq: word.word
            }
        })

        if(checkExist) {
            throw new Error('A word with the same letters already exist')
        }

        // Validate spellings
        const spellCheck = validateWord(word.word)
    
        if(!spellCheck.isValid){
            throw new Error('Incorrect spellings')
        }

        // Add author
        if(user){
            word.author = user
        }else{
            throw new Error('Must be logged in to add words')
        }

        return await Word.create(word)
    } catch (error){
        throw error
    }
}

const remove = async ( word:IWord, user?: string ) => {
    try {
        // Check author
        if(word.author !== user) throw new Error("You can only remove words that you have added")
        return await Word.findByIdAndDelete(word._id)
    } catch (error) {
        throw error
    }
}

const update = async ( word:IWord, user?: string ) => {
    try {
        // Check author
        if(word.author !== user) throw new Error("You can only update words that you have added")
        return await Word.findByIdAndUpdate(word._id, word)
    } catch (error) {
        throw error
    }
}

const get = async ( id?: string ) => {
    try {
        if(id) return await Word.findById(id)
        return await Word.find({})
    } catch (error) {
        throw error
    }
}

export default {
    get,
    add,
    update,
    remove
}