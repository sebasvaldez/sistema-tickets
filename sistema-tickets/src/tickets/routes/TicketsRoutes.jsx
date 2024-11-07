import { Route, Routes, Navigate } from "react-router-dom";
import { DashboardAdministrator } from "../../tickets/components/DashboardAdministrator";
import { DashboardTechnical } from "../components/DashboardTechnical";
import { useAuth } from "../../hooks/useAuth";



export const TicketsRoutes = () => {
  const { userData } = useAuth();
  
  const role = userData?.role;
  console.log(role)
  return (
    <Routes>
      {role === "administrator" && <Route path='administrator' element={<DashboardAdministrator />} />} 
      {role === "technical" && <Route path="technical" element={<DashboardTechnical />} />}
      {role==="no-technical" && <Route path="no-technical" element={<h1>No technical dashboard</h1>} />}


      <Route path="/*" element={<Navigate to={`${role}`} />} />

      
      
    </Routes>
  );
};

