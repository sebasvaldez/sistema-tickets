import { FormControl, TextField, Box, Button, Typography } from "@mui/material";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTickets } from "../../hooks/useTickets";
import { useAuth } from "../../hooks/useAuth";
import { TechnicalList } from "./TechnicalList";

export const CreatingTicket = () => {
  const { createTicket } = useTickets();
  const { userData } = useAuth();
  

  const {role}= userData

  
  const ticketDefault = {
    title: "",
    description: "",
  };

  const [newTicket, setNewTicket] = useState(ticketDefault);
  const { isMobile, isTablet } = useScreenSize();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewTicket({
      ...newTicket,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmitTicket = () => {
    createTicket(newTicket);
    setNewTicket(ticketDefault);
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

        {
          role === "administrator" && <TechnicalList />
        }
        <Box sx={{ textAlign: "center" }}>
          <Button onClick={handleSubmitTicket}>Crear ticket</Button>
          <Button onClick={cancelTicket}>Cancelar</Button>
        </Box>
      </FormControl>
    </Box>
  );
};
