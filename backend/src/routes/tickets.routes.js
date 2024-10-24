import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/tickets", authRequired, (req, res) => {
  res.send("Ruta de tickets");
});

export default router
