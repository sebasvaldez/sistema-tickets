import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  getallusers,
  verifyToken,
} from "../controllers/auth.controller.js";

import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validatorZod.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);
router.get("/users", authRequired, getallusers);
router.get("/verify", verifyToken);

export default router;
