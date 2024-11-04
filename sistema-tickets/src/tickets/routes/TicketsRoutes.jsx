import { Route, Routes, Navigate } from "react-router-dom";
import { DashboardAdministrator } from "../../tickets/components/DashboardAdministrator";
import { DashboardTechnical } from "../components/DashboardTechnical";



export const TicketsRoutes = () => {
  const role = "administrator";
  return (
    <Routes>
      {role === "administrator" && <Route path='/dashboard/administrator' element={<DashboardAdministrator />} />} 
      {role === "technical" && <Route path="/dashboard/technical" element={<DashboardTechnical />} />}
      {role==="no-technical" && <Route path="/dashboard/no-technical" element={<h1>No technical dashboard</h1>} />}


      <Route path="/*" element={<Navigate to={`/dashboard/${role}`} />} />

      
      
    </Routes>
  );
};

