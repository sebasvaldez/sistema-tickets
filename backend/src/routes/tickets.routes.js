import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTicket,
  getTickets,
  deleteTicket,
  updateTicket,
  createTicket,
  getAssignedTickets,
} from "../controllers/tickets.controller.js";

const router = Router();

router.get("/tickets", authRequired, getTickets);
router.post("/tickets", authRequired, createTicket);

//ruta para los tickets asignados a los tecnicos
router.get("/tickets/assigned", authRequired, getAssignedTickets);

router.get("/tickets/:id", authRequired, getTicket);
router.delete("/tickets/:id", authRequired, deleteTicket);
router.put("/tickets/:id", authRequired, updateTicket);



export default router;
