import { useTickets } from "../../hooks/useTickets";
import { Typography } from "@mui/material";

export const DailyTickets = () => {
  const { tickets } = useTickets();

  //guardo la fecha de hoy en una variable
  const today = new Date();
  //le resto 3 horas a la fecha de hoy
  today.setHours(today.getHours() - 3);
  //le doy formato a la fecha de hoy
  const todayString = today.toISOString().split("T")[0];

  //filtro los tickets que tengan la fecha de hoy
  const dailyTickets = tickets.filter(
    (ticket) => ticket.createdAt.split("T")[0] === todayString
  );

  {
    if (dailyTickets.length === 0) {
      return (
        <Typography variant="h5" align="center" color="textSecondary">
          Aun no se cargaron tickets el día de hoy
        </Typography>
      );
    } else {
      return (
        <div>
          {dailyTickets.map((ticket) => (
            <div key={ticket._id}>
              <h1>{ticket.title}</h1>
              <p>{ticket.description}</p>
            </div>
          ))}
        </div>
      );
    }
  }
};
