import { useEffect } from "react"
import { useToast } from "../components/Toast"
import { useAuth } from "./authContext"

const Login = () => {

    const {
        currentUser,
        signupWithEmailPassword,
        signOutUser,
        loading,
        error
    } = useAuth()

    const showToast = useToast();

    const handleLoginWithEmailPassword = () => {
        signupWithEmailPassword("shanaka1@shanaka.com", "123456")
    }

    const handleLogout = () => {
        signOutUser()
    }

    useEffect(() => {
        if(error != ""){
            showToast({
                type: "error",
                message: error
            })
        }
    }, [error])

    return (
        <div>
            { currentUser && <p>{currentUser.email}</p>}
            { loading && <h1>Loading</h1> }

            <button
                onClick={handleLoginWithEmailPassword}
            >
                Login
            </button>
            <button
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}

export default Login