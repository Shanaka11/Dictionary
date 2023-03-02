import { async } from "@firebase/util";
import { 
    onAuthStateChanged, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    User, 
    UserCredential
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "../components/Toast";
import auth from "./auth";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextProps {
    currentUser: User| null,
    loading: boolean,
    error: string,
    signupWithEmailPassword: (email: string, password: string) => null | Promise<void>,
    registerWithEmailPassword: (email: string, password: string) => null | Promise<void>
    signOutUser: () => void
}

export const AuthContext = createContext<AuthContextProps>({
    currentUser: null,
    loading: false,
    error: "",
    signupWithEmailPassword: (email: string, password: string) => null,
    registerWithEmailPassword: (email: string, password: string) => null,
    signOutUser: () => Promise<void>
});

export const AuthProvider:React.FC<AuthProviderProps> = ( { children }) => {
    const [ currentUser, setCurrentUser ] = useState<User|null>(null)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState("")

    const showToast = useToast()

    const loginUser = (userCredentials: UserCredential) => {
        setCurrentUser(userCredentials.user)
        localStorage.setItem("logged", "true")
           
        showToast({
            type: 'success',
            message: `${userCredentials.user.email} logged in successfully`
        })
    }

    const signupWithEmailPassword = async (email:string, password:string) => {
        setLoading(true)
        try{
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            loginUser(userCredentials)
            setError("")
            setLoading(false)
        }catch (error:any){
            setError(error.message)
            setLoading(false)
        }
    }

    const registerWithEmailPassword = async (email:string, password:string)  => {
        setLoading(true)
        try{
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)   
            loginUser(userCredentials)
            setLoading(false)
        }catch (error: any){
            setError(error.message)
            setLoading(false)
        }
    }

    const signOutUser = async () => {
        setLoading(true)
        await signOut(auth)
        localStorage.removeItem("logged")
        setLoading(false)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        loading,
        error,
        signupWithEmailPassword,
        registerWithEmailPassword,
        signOutUser
    }

    return (
        <AuthContext.Provider
            value={value}
        >
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}