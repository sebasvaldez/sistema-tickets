import { Route, Routes, Navigate } from "react-router-dom";
import { DashboardAdministrator } from "../../tickets/components/DashboardAdministrator";
import { DashboardTechnical } from "../components/DashboardTechnical";
import { useAuth } from "../../hooks/useAuth";
import { DashboardPage } from "../pages/DashboardPage";

export const TicketsRoutes = () => {
  const { userData, isAuthenticated } = useAuth();


  const role = userData?.role;





  return (
    <Routes>
      {role === "administrator" && <Route path='administrator' element={<DashboardPage />} />} 
      {role === "technical" && <Route path="technical" element={<DashboardPage />} />}
      {role==="no-technical" && <Route path="no-technical" element={<h1>No technical dashboard</h1>} />}


      <Route path="/*" element={<Navigate to={role || "/auth/login"} />} />

      
      
    </Routes>
  );
};

