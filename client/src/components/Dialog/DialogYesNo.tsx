import { Button } from '..'
import { DialogButtonContainer } from '../../word/AddWord/AddWordDialog.styled'
import Dialog from './Dialog'

interface DialogYesNoProps {
    title: string,
    show: boolean,
    onClose: () => void,
    onOk: () => void,
    children: React.ReactNode,
    loading: boolean
}

const DialogYesNo:React.FC<DialogYesNoProps> = ({
    show,
    onClose,
    onOk,
    title,
    children,
    loading
}) => {
  return (
    <Dialog
        onClose={onClose}
        show={show}
        title={title}
    >
        { children }
        <DialogButtonContainer>
            <Button
                type='button'
                onClick={ onOk }
                disabled={ loading }
            >
                Ok
            </Button>
            <Button
                type='button'
                endButton={true}
                btnStyle="letter"
                onClick={onClose}
                disabled={ loading }
            >
                Cancel
            </Button>
        </DialogButtonContainer>
    </Dialog>
  )
}

export default DialogYesNo