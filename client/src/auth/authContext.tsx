import { async } from "@firebase/util";
import { 
    onAuthStateChanged, 
    signInWithEmailAndPassword,
    signOut,
    User 
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "./auth";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextProps {
    currentUser: User| null,
    loading: boolean,
    error: string,
    signupWithEmailPassword: (email: string, password: string) => null | Promise<void>,
    signOutUser: () => void
}

export const AuthContext = createContext<AuthContextProps>({
    currentUser: null,
    loading: false,
    error: "",
    signupWithEmailPassword: (email: string, password: string) => null,
    signOutUser: () => Promise<void>
});

export const AuthProvider:React.FC<AuthProviderProps> = ( { children }) => {
    const [ currentUser, setCurrentUser ] = useState<User|null>(null)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState("")

    const signupWithEmailPassword = async (email:string, password:string) => {
        setLoading(true)
        try{
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            console.log(userCredentials)
            setLoading(false)
        }catch (error:any){
            setError(error.message)
            setLoading(false)
        }
    }

    const signOutUser = async () => {
        setLoading(true)
        await signOut(auth)
        setLoading(false)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        loading,
        error,
        signupWithEmailPassword,
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