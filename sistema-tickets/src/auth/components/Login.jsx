import { useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize.js";
import { Box, Button, FormControl, TextField } from "@mui/material";

export const Login = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

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

  const handleSubmit = () => {
    console.log(user.email, user.password);
  };

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
