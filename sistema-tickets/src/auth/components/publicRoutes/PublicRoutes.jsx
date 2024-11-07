import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"



export const PublicRoutes = ({children}) => {
    const { userData } = useAuth()
    
    if(!userData){
        return children
    }

}
