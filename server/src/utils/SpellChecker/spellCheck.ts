//@ts-ignore
import SpellChecker from 'simple-spellchecker'

const dictionary = SpellChecker.getDictionarySync("en-US")

export const validateWord = (word:string) => {

    const misspelled = !dictionary.spellCheck(word)
            if(misspelled) {
                const suggestions = dictionary.getSuggestions(word)
                return {
                    isValid: false,
                    suggestions: suggestions
                }
            }

            return {
                isValid: true
            }
}