import { TicketContex } from "./ticketContex";
import { useState, useEffect } from "react";
import {
  getTicketRequest,
  getTicketsRequest,
  createTicketRequest,
  updateTicketRequest,
} from "../../api/tickets";

import { useAuth } from "../..//hooks/useAuth";



export const TicketContextProvider = ({ children }) => {
  const [errorTickets, setErrorTickets] = useState(null);
  const [tickets, setTickets] = useState([]);


  const {isAuthenticated} = useAuth();

  
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
    
    if (isAuthenticated) {
      getAllTickets();
    }

  }, [isAuthenticated]);

  return (
    <TicketContex.Provider
      value={{
        errorTickets,
        getAllTickets,
        createTicket,
        tickets,
        setTickets,
      }}
    >
      {children}
    </TicketContex.Provider>
  );
};
