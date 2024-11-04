import { DashboardAdministrator } from "../components/DashboardAdministrator"
export const DashboardPage = () => {
  const role = "administrator";

  if (role == "administrator") {
    return <DashboardAdministrator />;
  } else if(role =="technical"){
    return <h1>Technical</h1>;
  }else{
    return <h1>No technical</h1>;
  }
};
