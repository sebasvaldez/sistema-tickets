import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { name, lastname, email, role, password } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      lastname,
      email,
      role,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      name: userSaved.name,
      lastname: userSaved.lastname,
      email: userSaved.email,
      role: userSaved.role,
    });
  } catch (error) {
    res.status(500).json({message:error.message})
  }
};

export const login = (req, res) => {
  res.send("Login");
};
