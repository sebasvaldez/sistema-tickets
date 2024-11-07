import { AuthContext } from "./AuthContext";
import { useState } from "react";
import { loginRequest, registerRequest } from "../../api/auth.js";

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isAhtenticated, setIsAuthenticated] = useState(false);

  const loginUser = async (user) => {
    try {
      const resp = await loginRequest(user);

      if (resp.status === 200) {
        setUserData(resp.data);
        localStorage.setItem("userData", JSON.stringify(resp.data));
        setIsAuthenticated(true);
        console.log(userData)
      }
    } catch (error) {
      setError(error.response.data.message);
      
    }
  };
  //console.log(userData)

 // console.log(error.response.data.message);

  const registerUser = async (user) => {
    const resp = await registerRequest(user);
    console.log(resp);
    
  };


  const logOut=()=>{
    localStorage.removeItem("userData");
    setUserData(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ loginUser,logOut, registerUser, userData, isAhtenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
