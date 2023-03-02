import { useEffect, useState } from "react"
import { Button, TextField } from "../components"
import { DialogButtonContainer } from "../components/AddWord/AddWordDialog.styled"
import { Dialog } from "../components/Dialog"
import { useToast } from "../components/Toast"
import { useAuth } from "./authContext"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

interface loginDialogProps {
    show: boolean,
    onClose: () => void
}

export type Content = 'LOGIN' | 'REGISTER'

const Login:React.FC<loginDialogProps> = ({ show, onClose }) => {

    const [ content, setContent ] = useState<Content>('LOGIN')

    const {
        error
    } = useAuth()

    const showToast = useToast();


    useEffect(() => {
        if(error != ""){
            showToast({
                type: "error",
                message: error
            })
        }
    }, [error])

    return  (
        <Dialog
            show={show}
            onClose={onClose}
            title="Login"
        >
            {
                content === 'LOGIN' ?
                (
                    <LoginForm 
                        onClose={onClose}
                        changeContent={setContent}
                    />
                ):(
                    <RegisterForm 
                        onClose={onClose}
                        changeContent={setContent}
                    />
                )
            }
        </Dialog>
    )
}

export default Login