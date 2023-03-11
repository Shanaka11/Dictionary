import { useState } from "react"
import { Button, TextField } from "../components"
import { DialogButtonContainer } from "../word/AddWord/AddWordDialog.styled"
import { useToast } from "../components/Toast"
import { AuthButtonContainer } from "./Auth.styled"
import { useAuth } from "./authContext"
import { Content } from "./Login"

interface RegisterFormProps {
  onClose: () => void
  changeContent: (content: Content) => void
}

const RegisterForm:React.FC<RegisterFormProps> = ({onClose, changeContent}) => {

    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")
    const [ password2, setPassword2 ] = useState<string>("")

    const {
        registerWithEmailPassword,
        loading,
    } = useAuth()

    const showToast = useToast();

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(password != password2){
          showToast({
            type: 'error',
            message: 'Password do not match'
          })
          return
        }
        registerWithEmailPassword(email, password)
    }

    return (
      <form onSubmit={handleFormSubmit}>
          <TextField 
            required
            autoFocus
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
          <TextField 
            name='password2'
            type="password"
            placeholder='Confirm Password'
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
          />
          <AuthButtonContainer>
            <Button
                type="button"
                disabled={loading}
                onClick={(event) => changeContent('LOGIN')}
            >
                Login
            </Button>
            <div>
              <Button
                type='submit'
                disabled={loading}
              >
                  Register
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

export default RegisterForm