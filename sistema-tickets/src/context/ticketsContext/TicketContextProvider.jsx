import { TicketContex } from "./ticketContex";
import { useState, useEffect } from "react";
import {
  getTicketRequest,
  getTicketsRequest,
  createTicketRequest,
  updateTicketRequest,
} from "../../api/tickets";

export const TicketContextProvider = ({ children }) => {
  const [errorTickets, setErrorTickets] = useState(null);
  const [tickets, setTickets] = useState([]);

  const getAllTickets = async () => {
    try {
      const resp = await getTicketsRequest();
      setTickets(resp.data);
      return resp.data;
    } catch (error) {
      setErrorTickets(error);
    }
  };

  const createTicket = async (ticket) => {
    try {
      const resp = await createTicketRequest(ticket);

      getAllTickets();
      return resp.data;
    } catch (error) {
      setErrorTickets(error);
    }
  };

  useEffect(() => {
    getAllTickets();
  }, []);

 
  return (
    <TicketContex.Provider
      value={{
        errorTickets,
        getAllTickets,
        createTicket,
        tickets
      }}
    >
      {children}
    </TicketContex.Provider>
  );
};
