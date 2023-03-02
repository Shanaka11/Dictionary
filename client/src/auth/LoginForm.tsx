import { useState } from "react"
import { Button, TextField } from "../components"
import { AuthButtonContainer } from "./Auth.styled"
import { useAuth } from "./authContext"
import { Content } from "./Login"

interface LoginFormProps {
    onClose: () => void
    changeContent: (content: Content) => void
}

const LoginForm:React.FC<LoginFormProps> = ({ onClose, changeContent }) => {

    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")

    const {
        signupWithEmailPassword,
        loading,
    } = useAuth()

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        signupWithEmailPassword(email, password)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <TextField 
                name='email'
                type="email"
                placeholder='Email'
                required
                autoFocus
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <TextField 
                name='password'
                type="password"
                placeholder='Password'
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <AuthButtonContainer>
                <Button
                    type="button"
                    disabled={loading}
                    onClick={(event) => changeContent("REGISTER")}
                >
                    Register
                </Button>
                <div>
                    <Button
                        type='submit'
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
                </div>
            </AuthButtonContainer>
        </form>
    )
}

export default LoginForm