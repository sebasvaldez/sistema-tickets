import Ticket from "../models/ticket.model.js";
import User from "../models/user.model.js";

export const getTickets = async (req, res) => {
  try {
    const ticket = await Ticket.find({
      user: req.user.id,
    }).populate("userAsigned");
    res.json(ticket);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Algo salio mal al traer los tickets",
    });
  }
};

export const createTicket = async (req, res) => {
  try {
    const { title, description, status, userAsigned } = req.body;
    const newTicket = new Ticket({
      title,
      description,
      status,
      user: req.user.id,
      userAsigned,
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
    const ticket = await Ticket.findById(id)
      .populate("user")
      .populate("userAsigned")
      .populate("history.updatedBy"); //probar esta ultima opcion!!!
    if (!ticket)
      return res.status(404).json({ message: "Ticket no encontrado" });

    res.json(ticket);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Algo salio mal al traer el ticket",
    });
  }
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
  const { status, userAsigned, title, description } = req.body; // Desestructuramos para ver los campos que vamos a actualizar
  const userId = req.user.id; // ID del usuario que está realizando la actualización, por ejemplo, desde el token de autenticación

  try {
    // Encuentra el ticket actual
    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket no encontrado" });
    }

    // Creamos un registro de cambios si hay alguna diferencia en los campos
    const changes = {};
    if (status && status !== ticket.status) changes.status = status;
    if (userAsigned && userAsigned !== String(ticket.userAsigned))
      changes.userAsigned = userAsigned;
    if (title && title !== ticket.title) changes.title = title;
    if (description && description !== ticket.description)
      changes.description = description;

    // Solo guardamos en el historial si hay cambios
    if (Object.keys(changes).length > 0) {
      ticket.history.push({
        updatedBy: userId, // Quién realizó el cambio
        changes, // Cambios específicos
      });
    }

    // Actualizamos los campos en el ticket
    if (status) ticket.status = status;
    if (userAsigned) ticket.userAsigned = userAsigned;
    if (title) ticket.title = title;
    if (description) ticket.description = description;

    // Guardamos el ticket actualizado
    const updatedTicket = await ticket.save();

    // Realizamos el populate antes de enviar la respuesta
    await updatedTicket.populate("user", "name lastname");

    res.json(updatedTicket);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Algo salió mal al actualizar el ticket",
    });
  }
};

export const getAssignedTickets = async (req,res) => {

  const userId = req.user.id;
  
  try {
    const tickets = await Ticket.find({
      userAsigned: userId,
    }).populate("user","name lastname")
    .populate("userAsigned","name lastname");
    res.json(tickets);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Algo salió mal al traer los tickets asignados",
    });
  }
};
