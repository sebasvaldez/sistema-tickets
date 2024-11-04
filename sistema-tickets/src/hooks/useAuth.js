import { AuthContext } from "../context/authContext/AuthContext";
import { useContext } from "react";

export const useAuth= ()=>{
    return useContext(AuthContext);
}