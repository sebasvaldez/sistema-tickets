import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth.js";
import { useScreenSize } from "../../hooks/useScreenSize.js";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Alert,
} from "@mui/material";

export const Register = () => {
  const { registerUser, error } = useAuth();
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  const [role, setRole] = useState("");

  const userDefault = {
    name: "",
    lastname: "",
    email: "",
    role: "",
    password: "",
  };

  const [newUser, setNewUser] = useState(userDefault);

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
    registerUser(newUser);
    setNewUser(userDefault);
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
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <Box sx={{ display: error ? "block" : "none" }}>
        {error?.map((text) => (
          <Alert key={text} sx={{ textAlign: "start" }} severity="error">
            {text}
          </Alert>
        ))}
      </Box>
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
          value={newUser.name}
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
          value={newUser.lastname}
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
          value={newUser.email}
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
          value={newUser.password}
        />

        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ marginTop: "10px" }}
        >
          Registrar
        </Button>
        <Button
          onClick={() => setNewUser(userDefault)}
          variant="outlined"
          color="success"
          sx={{ marginTop: "10px" }}
        >
          Limpiar campos
        </Button>
      </FormControl>
    </Box>
  );
};
