import { useAuth } from "../../../hooks/useAuth"
import { Navigate } from "react-router-dom"


export const PrivateRoutes = ({children}) => {
    const {isAuthenticated}= useAuth()
    return isAuthenticated ? children : <Navigate to="/auth/login"/>
  
}
