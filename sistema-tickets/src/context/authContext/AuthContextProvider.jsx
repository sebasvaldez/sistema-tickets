import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import {
  loginRequest,
  registerRequest,
  verifyTokenRequest,
  getAllUsersRequest
} from "../../api/auth.js";
import Cookies from "js-cookie";

export const AuthContextProvider = ({ children }) => {

 
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [allUsers, setAllUsers] = useState([]);



  const loginUser = async (user) => {
    try {
      const resp = await loginRequest(user);

      if (resp.status === 200) {
        setUserData(resp.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error)
      // setError(error.response.data.message);
    }
  };
  const registerUser = async (user) => {
    try {
      const resp = await registerRequest(user);
      console.log(resp);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const logOut = () => {
    setUserData(null);
    setIsAuthenticated(false);
    Cookies.remove("token");
  };

  const checkLogin = async () => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const resp =await verifyTokenRequest(token);
        if(!resp.data) setIsAuthenticated(false);

        setUserData(resp.data);
        setIsAuthenticated(true);
        

      } catch (error) {
        setError(error.response.data.message);
        setIsAuthenticated(false);
        setUserData(null);
        Cookies.remove("token");
      }
    }
  }


  const getAllUsers= async ()=>{
    try {
      const resp = await getAllUsersRequest();
      setAllUsers(resp.data);

      
    } catch (error) {

      setError(error.response.data.message);
      
    }
  }



  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [error, setError]);

  useEffect(() => {
   
    checkLogin();

  }, []);

  useEffect(() => {
    if(isAuthenticated){
      getAllUsers();
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        logOut,
        registerUser,
        userData,
        isAuthenticated,
        error,
        setError,
        allUsers
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
