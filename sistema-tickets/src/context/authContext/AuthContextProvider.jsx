import { AuthContext } from "./AuthContext";
import { useState } from "react";
import {loginRequest, registerRequest} from "../../api/auth.js"

export const AuthContextProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);


    const loginUser = async (user)=>{
        const resp = await loginRequest(user);

        if(resp.status === 200){
            setUserData(resp.data);
        }

    }


    const registerUser= async (user)=>{
        const resp = await registerRequest(user);
        console.log(resp)

    }




  return <AuthContext.Provider value={{loginUser,registerUser, userData}}>{children}</AuthContext.Provider>;
};
