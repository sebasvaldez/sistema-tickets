import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTicket,
  getTickets,
  deleteTicket,
  updateTicket,
  createTicket,
} from "../controllers/tickets.controller.js";

const router = Router();

router.get("/tickets", authRequired, getTickets);
router.get("/tickets/:id", authRequired, getTicket);
router.post("/tickets", authRequired, createTicket);
router.delete("/tickets/:id", authRequired, deleteTicket);
router.put("/tickets/:id", authRequired, updateTicket);

export default router;
