import { useAuth } from "./authContext"


interface ProtectedRoutesProps {
    children: React.ReactNode
}

const ProtectedRoute:React.FC<ProtectedRoutesProps> = ({ children }) => {

    const {currentUser} = useAuth()

    if(localStorage.getItem('logged') || currentUser){
        return (
            <>
                { children }
            </>
        )
    }

    return <h1>Does not have permission</h1>
}

export default ProtectedRoute