import { TicketContex } from "../context/ticketsContext/ticketContex";
import { useContext } from "react";

export const useTickets = () => {

    return useContext(TicketContex);
}