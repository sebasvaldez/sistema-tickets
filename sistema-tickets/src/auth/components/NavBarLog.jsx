import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

export const NavBarLog = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="static" sx={{ paddingY: "20px" }}>
        <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
          Sistema de gestión de tickets
        </Typography>
      </AppBar>
    </Box>
  );
};
