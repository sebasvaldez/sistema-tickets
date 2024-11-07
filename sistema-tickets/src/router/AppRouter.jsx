import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "../auth/components/publicRoutes/PublicRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { TicketsRoutes } from "../tickets/routes/TicketsRoutes";
import { FooterLog } from "../auth/components/FooterLog";
import { Box } from "@mui/material";

export const AppRouter = () => {
  return (
    <Box
      sx={{
        display: "grid",
        minHeight: "70vh",
        gridTemplateRows: "1fr auto",
      }}
    >
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* rutas de los perfiles que manejan los tickets*/}
        <Route path="/dashboard/*" element={<TicketsRoutes />} />
      </Routes>

      {/* <FooterLog /> */}
    </Box>
  );
};
