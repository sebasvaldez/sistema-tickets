import { useEffect, useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize.js";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const Register = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  const [role, setRole] = useState("");

  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    email: "",
    role: "",
    password: "",
  });

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.id]: e.target.value,
      role: role,
    });
  };

  const roleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = () => {
    console.log(newUser);
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
        marginY: "40px",
      }}
    >
      <FormControl>
        <TextField
          id="name"
          label="name"
          type="text"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
        />
        <TextField
          id="lastname"
          label="lastname"
          type="text"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
        />
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
        <FormControl>
          <InputLabel id="roleId">Role</InputLabel>
          <Select
            id="role"
            labelId="roleId"
            label="Role"
            variant="outlined"
            value={role}
            required
            fullWidth
            onChange={roleChange}
          >
            <MenuItem value="administrator">Administrador</MenuItem>
            <MenuItem value="technical">Técnico</MenuItem>
            <MenuItem value="no-technical">Usuarios</MenuItem>
          </Select>
        </FormControl>

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
          Registrar
        </Button>
        <Button>Limpiar campos</Button>
      </FormControl>
    </Box>
  );
};
