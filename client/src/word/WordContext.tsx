// Create a context that includes 4 dialogs related to
// 1 - Add Word
// 2 - Edit Word
// 3 - Delete Word
// 4 - Add word to lost

// create hooks to each action
import { createContext, useContext, useRef, useState } from "react";
import { IWord } from "../types/IWord";
import AddWordDialog from "./AddWord/AddWordDialog";
import DeleteWordDialog from "./DeleteWord/DeleteWordDialog";

interface WordContextProps {
    addWord: () => void,
    modifyWord: (word:IWord) => void,
    deleteWord: (word:IWord) => void,
    addWordToList: (word:IWord) => void,
    setRefetchMethod: any
}

const WordContext = createContext<WordContextProps>({
    addWord: () => {},
    modifyWord: (word) => {},
    deleteWord: (word) => {},
    addWordToList: (word) => {},
    setRefetchMethod: () => {}
})

interface WordProviderProps {
    children: React.ReactNode;
}

type DialogState = 'ADD' | 'REMOVE' | 'UPDATE' | 'LIST' | 'NONE'

export const WordProvider:React.FC<WordProviderProps> = ({ children }) => {

    const [dialogState, setDialogState] = useState<DialogState>('NONE')
    const [word, setWord] = useState<IWord | null>(null)
    const refetch = useRef<any>(null)

    const setRefetchMethod = (refetchMethod:any) => {
        refetch.current = refetchMethod
    }

    const addWord = () => {
        setDialogState('ADD')
    }

    const modifyWord = (word: IWord) => {
        setDialogState('UPDATE')
        setWord(word)
    }

    const deleteWord = (word: IWord) => {
        setDialogState('REMOVE')
        setWord(word)
    }

    const addWordToList = (word: IWord) => {

    }

    const handleDialogOnClose = () => {
        if(dialogState != 'LIST'){
            if(refetch.current){
                refetch.current()
            }
        }
        setWord(null)
        setDialogState('NONE')
    }

    return (
        <WordContext.Provider
            value={{
                addWord,
                modifyWord,
                deleteWord,
                addWordToList,
                setRefetchMethod
            }}
        >
            {/* Add Dialog */}
            <AddWordDialog show={dialogState === 'ADD'} onClose={handleDialogOnClose}/>
            {/* Modify Dialog */}
            {word && <AddWordDialog show={dialogState === 'UPDATE'} word={word} onClose={handleDialogOnClose} />}
            {/* Delete Dialog */}
            {word && <DeleteWordDialog show={dialogState === 'REMOVE'} word={word} onClose={handleDialogOnClose} />}
            {/* Add to list Dialog */}
            { children }
        </WordContext.Provider>
    )
}

// Pass the refetch method here
export const useWord = (refetch?: any) => {
    const context = useContext(WordContext)
    const { setRefetchMethod } = context
    if(refetch){
        setRefetchMethod(refetch)
    }
    return context

}