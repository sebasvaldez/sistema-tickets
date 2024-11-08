import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { TicketsRoutes } from "../tickets/routes/TicketsRoutes";
import { PrivateRoutes } from "../auth/components/privateRoutes/PrivateRoutes";
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
        <Route path="/" element={<AuthRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* rutas de los perfiles que manejan los tickets*/}
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoutes>
              <TicketsRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>

      {/* <FooterLog /> */}
    </Box>
  );
};
