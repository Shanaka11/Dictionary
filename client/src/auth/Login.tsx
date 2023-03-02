import { useEffect, useState } from "react"
import { Button, TextField } from "../components"
import { DialogButtonContainer } from "../components/AddWord/AddWordDialog.styled"
import { Dialog } from "../components/Dialog"
import { useToast } from "../components/Toast"
import { useAuth } from "./authContext"

interface loginDialogProps {
    show: boolean,
    onClose: () => void
}

const Login:React.FC<loginDialogProps> = ({ show, onClose }) => {

    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")

    const {
        signupWithEmailPassword,
        loading,
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

    const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        signupWithEmailPassword(email, password)
    }

    return  (
            <Dialog
                show={show}
                onClose={onClose}
                title="Login"
            >
                <form>
                    <TextField 
                        name='email'
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <TextField 
                        name='password'
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <DialogButtonContainer>
                        <Button
                            type='submit'
                            onClick={ handleFormSubmit }
                            disabled={loading}
                        >
                            Login
                        </Button>
                        <Button
                            type='button'
                            endButton={true}
                            btnStyle="letter"
                            onClick={onClose}
                            disabled={loading}
                        >
                            Cancel
                        </Button>
                    </DialogButtonContainer>
                </form>
            </Dialog>
    )
    // return (
    //     <div>
    //         { currentUser && <p>{currentUser.email}</p>}
    //         { loading && <h1>Loading</h1> }

    //         <button
    //             onClick={handleLoginWithEmailPassword}
    //         >
    //             Login
    //         </button>
    //         <button
    //             onClick={handleLogout}
    //         >
    //             Logout
    //         </button>
    //     </div>
    // )
}

export default Login