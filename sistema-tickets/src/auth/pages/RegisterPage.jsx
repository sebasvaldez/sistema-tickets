import { Box } from "@mui/material";
import { Register } from "../components/Register";
import { NavBarLog } from "../components/NavBarLog";

export const RegisterPage = () => {
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
      <Register />
    </Box>
  );
};
