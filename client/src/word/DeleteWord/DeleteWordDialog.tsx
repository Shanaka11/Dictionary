import { useEffect } from 'react'
import { useMutation } from 'react-query'
import { wordApi } from '../../api'
import DialogYesNo from '../../components/Dialog/DialogYesNo'
import { useToast } from '../../components/Toast'
import { IWord } from '../../types/IWord'

interface DeleteWordDialogProps {
    show: boolean,
    onClose: () => void,
    word?: IWord 
}

const DeleteWordDialog:React.FC<DeleteWordDialogProps> = ({
    show,
    onClose,
    word
}) => {

    const showToast = useToast()

    const {
        error,
        isLoading,
        mutate: wordDelete
    } = useMutation(
        wordApi.deleteWord,
        {
            onSuccess: (data) => {
                showToast({
                    type: "success",
                    message: `${data.data.word} deleted`
                })
                onClose()
            }
        }
    )    

    useEffect(() => {
        if(error){
            const err = error
            showToast({
                type: 'error',
                //@ts-ignore
                message: err.response.data.error || err.message
            })
        }
    }, [error])
    
    const handleOnOk = () => {
        if(word){
            wordDelete(word)
        }
    }
    
    return (
        <DialogYesNo
            onClose={onClose}
            show={show}
            onOk={handleOnOk}
            title={`Delete ${word?.word}`}
            loading={isLoading}
        >
            <p>Are you sure that you want to delete this word</p>
        </DialogYesNo>
    )
}

export default DeleteWordDialog