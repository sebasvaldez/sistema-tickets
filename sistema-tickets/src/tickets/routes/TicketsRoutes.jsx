import { Route, Routes } from "react-router-dom";
import { AdminPage, NoTechnicalPage, TechnicalPage } from "../pages";

export const TicketsRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/technical" element={<TechnicalPage />} />
      <Route path="/no-technical" element={<NoTechnicalPage />} />
    </Routes>
  );
};
