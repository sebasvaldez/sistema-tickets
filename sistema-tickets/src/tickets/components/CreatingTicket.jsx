import {
  FormControl,
  TextField,
  Box,
  Button,
} from "@mui/material";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreatingTicket = () => {

  const ticketDefault = {
    title: "",
    description: "",
    status: "pending",
  }

  const [newTicket, setNewTicket] = useState(ticketDefault);
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  const navigate= useNavigate();

  const handleChange = (e) => {
    setNewTicket({
      ...newTicket,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmitTicket = () => {
    console.log(newTicket);

  };
  const cancelTicket = () => {
    
    setNewTicket(ticketDefault);
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

      <FormControl>
        <TextField
          id="title"
          label="Título"
          type="text"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
          value={newTicket.title}
        />
        <TextField
          id="description"
          label="Descripción"
          type="text"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          placeholder="Descripción del problema"
          required
          fullWidth
          onChange={handleChange}
          value={newTicket.description}
        />

        {/* <FormControl>
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
        </FormControl> */}

        <Box sx={{ textAlign: "center" }}>
          <Button onClick={handleSubmitTicket}>Crear ticket</Button>
          <Button onClick={cancelTicket}>Cancelar</Button>
        </Box>
      </FormControl>
    </Box>
  );
};
