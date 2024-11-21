import { useTickets } from "../../hooks/useTickets";

export const DailyTickets = () => {
  const { tickets } = useTickets();
  console.log(tickets)

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
      return <h1>No daily tickets</h1>;
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
