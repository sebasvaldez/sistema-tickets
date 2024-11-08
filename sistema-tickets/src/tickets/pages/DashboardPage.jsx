import { DashboardAdministrator } from "../components/DashboardAdministrator";
import { DashboardTechnical } from "../components/DashboardTechnical";
import { useAuth } from "../../hooks/useAuth";
import { Linear } from "../../auth/components/linearProgress/Linear";

export const DashboardPage = () => {
  const { userData, isAuthenticated } = useAuth();
  const role = userData?.role;

  if (isAuthenticated==false) {
    return <Linear />;
  }

 
  if (role === "administrator") {
    return <DashboardAdministrator />;
  }
  if (role === "technical") {
    return <DashboardTechnical />;
  }
};
