import axios from "./axios.js";





export const getTicketsRequest = () => axios.get(`/tickets`);

export const getTicketRequest = (id) => axios.get(`/tickets/${id}`);

export const createTicketRequest = (ticket) => axios.post(`/tickets`, ticket);

export const updateTicketRequest = (id, ticket) => axios.put(`/tickets/${id}`, ticket);