import { useState } from 'react'
import { useMutation } from 'react-query'
import { Button } from '..'
import { Dialog } from '../Dialog'
import TextField from '../Textfield.styled'
import { DialogButtonContainer } from './AddWordDialog.styled'
import { wordApi } from '../../api'

interface AddWordDialogProps {
    show: boolean,
    onClose: () => void
}

const AddWordDialog:React.FC<AddWordDialogProps> = ({
    show,
    onClose
}) => {

    const [newWord, setNewWord] = useState("")

    const {
        data,
        isLoading,
        mutate: wordMutate
    } = useMutation(
        wordApi.addWords,
        {
            onSuccess: (data) => {
                setNewWord("")
            }
        }
    )

    const handleFormSubmit = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        event.preventDefault()
        wordMutate({
            word: newWord
        })
    }

    const handlenewWordOnChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setNewWord(event.target.value)
    }

    return (
        <Dialog
            show={show}
            onClose={onClose}
            title="Add a new word to the word list"
        >
            <form>
                <TextField 
                    name='newword'
                    type="text"
                    autoComplete='off'
                    placeholder='Type here ...'
                    value={newWord}
                    onChange={handlenewWordOnChange}
                />
                <DialogButtonContainer>
                    <Button
                        type='submit'
                        onClick={ handleFormSubmit }
                        disabled={isLoading}
                    >
                        Add
                    </Button>
                    <Button
                        type='button'
                        endButton={true}
                        btnStyle="letter"
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        Cancel
                    </Button>
                </DialogButtonContainer>
            </form>
        </Dialog>
    )
}

export default AddWordDialog