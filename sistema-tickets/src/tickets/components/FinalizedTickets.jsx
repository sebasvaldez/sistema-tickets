import { useTickets } from "../../hooks/useTickets";

export const FinalizedTickets = () => {
  const { tickets } = useTickets();

  const finalizedTickets = tickets.filter(
    (ticket) => ticket.status === "Finalizado"
  );

  if (finalizedTickets.length === 0) {
    return <h1>No hay tickets finalizados</h1>;
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
};
