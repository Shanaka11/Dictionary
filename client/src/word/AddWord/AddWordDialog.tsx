import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { Button } from '../../components'
import { Dialog } from '../../components/Dialog'
import TextField from '../../components/Textfield.styled'
import { DialogButtonContainer } from './AddWordDialog.styled'
import { wordApi } from '../../api'
import { useToast } from '../../components/Toast'
import { IWord } from '../../types/IWord'

interface AddWordDialogProps {
    show: boolean,
    onClose: () => void,
    word?: IWord 
}

const AddWordDialog:React.FC<AddWordDialogProps> = ({
    show,
    onClose,
    word
}) => {

    const [newWord, setNewWord] = useState(word ? word.word : "")

    const showToast = useToast()

    const {
        error,
        isLoading,
        mutate: wordMutate
    } = useMutation(
        wordApi.addWords,
        {
            onSuccess: (data) => {
                setNewWord("")
                showToast({
                    type: "success",
                    message: `${data.data.word} added`
                })
            }
        }
    )

    const {
        error: updateError,
        isLoading: updateIsLoading,
        mutate: updateWord
    } = useMutation(
        wordApi.editWord,
        {
            onSuccess: (data) => {
                setNewWord("")
                showToast({
                    type: "success",
                    message: `${data.data.word} updated`
                })
                onClose()
            }
        }
    )

    useEffect(() => {
        if(error || updateError){
            const err = error || updateError
            showToast({
                type: 'error',
                //@ts-ignore
                message: err.response.data.error || err.message
            })
        }
    }, [error, updateError])

    const handleFormSubmit = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        event.preventDefault()
        if(word){
            updateWord({
                _id: word._id,
                word: newWord,
                author: word.author
            })
        }else{
            wordMutate({
                word: newWord
            })
        }
    }

    const handlenewWordOnChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setNewWord(event.target.value)
    }

    return (
        <Dialog
            show={show}
            onClose={onClose}
            title={word ? "Update the word" : "Add a new word"}
        >
            <form>
                <TextField 
                    name='newword'
                    type="text"
                    autoComplete='off'
                    placeholder='Type here ...'
                    value={newWord}
                    onChange={handlenewWordOnChange}
                    autoFocus
                />
                <DialogButtonContainer>
                    <Button
                        type='submit'
                        onClick={ handleFormSubmit }
                        disabled={isLoading || updateIsLoading}
                    >
                        {word ? "Update" : "Add"}
                    </Button>
                    <Button
                        type='button'
                        endButton={true}
                        btnStyle="letter"
                        onClick={onClose}
                        disabled={isLoading || updateIsLoading}
                    >
                        Cancel
                    </Button>
                </DialogButtonContainer>
            </form>
        </Dialog>
    )
}

export default AddWordDialog