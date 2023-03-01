import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "./authContext"


interface ProtectedRoutesProps {
    children: React.ReactNode
}

const ProtectedRoute:React.FC<ProtectedRoutesProps> = ({ children }) => {

    const {currentUser} = useAuth()
    const location = useLocation()

    if(localStorage.getItem('logged') || currentUser){
        return (
            <>
                { children }
            </>
        )
    }

    return <Navigate to="/" state={{ from: location }} replace />
}

export default ProtectedRoute