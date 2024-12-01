import {
  FormControl,
  TextField,
  Box,
  Button,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useState, useCallback } from "react";

import { useTickets } from "../../hooks/useTickets";
import { useAuth } from "../../hooks/useAuth";
import { TechnicalList } from "./TechnicalList";
import { useEffect } from "react";

export const CreatingTicket = () => {
  const { createTicket } = useTickets();
  const { userData, allUsers } = useAuth();


  const [technicalAssigned, setTechnicalAssigned] = useState("");


  //console.log(technicalAssigned)

  const { role } = userData;

  const technicalUsers = allUsers.filter((user) => user.role === "technical");

  const ticketDefault = {
    title: "",
    description: "",
    userAsigned: "",
  };

  const [newTicket, setNewTicket] = useState(ticketDefault);
  const { isMobile, isTablet } = useScreenSize();

  const handleChange = (e) => {
    setNewTicket({
      ...newTicket,
      [e.target.id]: e.target.value,

      
    });
  };

 
  const handleAssigned = (e) => {
    setTechnicalAssigned(e.target.value);
  };

  const handleSubmitTicket = () => {

     createTicket(newTicket);
     setNewTicket(ticketDefault);
     //console.log(newTicket);

  };
  const cancelTicket = () => {
    setNewTicket(ticketDefault);
  };

  //console.log(newTicket);

  useEffect(() => {
    if (technicalAssigned) {
      setNewTicket({
        ...newTicket,
        userAsigned: technicalAssigned,
      });
    }
  }, [technicalAssigned]);
  

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

        {role === "administrator" && (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Técnico</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={technicalAssigned}
              label="Técnico"
              onChange={handleAssigned}
            >
              {technicalUsers.map((user) => (
                <MenuItem key={user._id} value={user._id}>
                  {user.name + " " + user.lastname}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <Box sx={{ textAlign: "center" }}>
          <Button onClick={handleSubmitTicket}>Crear ticket</Button>
          <Button onClick={cancelTicket}>Cancelar</Button>
        </Box>
      </FormControl>
    </Box>
  );
};
