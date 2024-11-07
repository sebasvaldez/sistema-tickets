import { useEffect, useState } from "react";
import  {useNavigate} from "react-router-dom";
import { useScreenSize } from "../../hooks/useScreenSize.js";
import { Box, Button, FormControl, TextField } from "@mui/material";
import { useAuth } from "../../hooks/useAuth.js";

export const Login = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  const { loginUser, userData, isAhtenticated } = useAuth();

  const navigate= useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    await loginUser(user);
  };


  useEffect(() => {
    if(isAhtenticated){
      if(userData.role==="administrator"){
        navigate("/dashboard/administrator")
      }else if(userData.role==="technical"){
        navigate("/dashboard/technical")
      }else if(userData.role==="no-technical"){
        navigate("/dashboard/no-technical")
      }

    }

    
  }, [isAhtenticated])
  
 

  return (
    <Box
    
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: isMobile ? "80%" : isTablet ? "90%" : "100%",
        maxWidth: "400px",
        padding: "20px",
        boxShadow: 2,
      }}
    >
      <FormControl>
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} variant="contained">
          Ingresar
        </Button>
      </FormControl>
    </Box>
  );
};
