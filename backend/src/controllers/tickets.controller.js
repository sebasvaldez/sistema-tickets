import Ticket from "../models/ticket.model.js";

export const getTickets = async (req, res) => {
  try {
    const ticket = await Ticket.find({
      user: req.user.id
    });
    res.json(ticket);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Algo salio mal al traer los tickets",
    });
  }
};

export const createTicket = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const newTicket = new Ticket({
      title,
      description,
      status,
      user: req.user.id
    });
    const ticketSaved = await (await newTicket.save()).populate("user");
    res.json(ticketSaved);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Algo salio mal al crear el ticket",
    });
  }
};

export const getTicket = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findById(id).populate("user");
    if (!ticket)
      return res.status(404).json({ message: "Ticket no encontrado" });

    res.json(ticket);
  } catch (error) {}
};

export const deleteTicket = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findByIdAndDelete(id);
    if (!ticket)
      return res.status(204).json({ message: "Ticket no encontrado" });
    res.json({ message: "Ticket eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Algo salio mal al eliminar el ticket",
    });
  }
};

export const updateTicket = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findByIdAndUpdate(id, req.body, { new: true });
    if (!ticket)
      return res.status(404).json({ message: "Ticket no encontrado" });
    res.json(ticket);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Algo salio mal al actualizar el ticket",
    });
  }
};
