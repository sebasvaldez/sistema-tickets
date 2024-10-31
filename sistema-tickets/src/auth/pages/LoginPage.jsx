import { Box, Typography } from "@mui/material";
import { Login } from "../components/Login";
import { NavBarLog } from "../components/NavBarLog";
import iconoSoporte from "../../assets/iconoSoporte.png";

export const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <NavBarLog />

      <img
        src={iconoSoporte}
        alt="iconoSoporte"
        style={{ width: "100px", height: "100px", margin: "20px" }}
      />

      <Typography
        variant="h1"
        sx={{
          marginTop: "40px",
          fontSize: "1.5rem",
          textAlign: "center",
          color: "text.secondary",
          fontWeight: "bold",
        }}
      >
        Ingrese sus datos
      </Typography>

      <Login />
    </Box>
  );
};
