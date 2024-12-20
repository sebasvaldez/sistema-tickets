import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(404).json({ message: "Usuario no encontrado." });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ message: "Credenciales inválidas." });

    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token);
    res.json({
      id: userFound._id,
      name: userFound.name,
      lastname: userFound.lastname,
      email: userFound.email,
      role: userFound.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });

  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado." });

  return res.json({
    id: userFound._id,
    name: userFound.name,
    lastname: userFound.lastname,
    email: userFound.email,
    role: userFound.role,
  });
};

//funiones para el administrador

export const getallusers = async (req, res) => {
  try {
    const usersList = await User.find();
    if (!usersList) return res.status(400).json({ message: "No hay usuarios" });
    res.json(usersList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

    res.json({
      id: userSaved._id,
      name: userSaved.name,
      lastname: userSaved.lastname,
      email: userSaved.email,
      role: userSaved.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//funcion para verificar el token despues del login
export const verifyToken = async (req, res) => {
  //obtenemos el token de las cookies
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "token no autorizado" });

  //verificamos el token con la clave secreta
  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "token no autorizado" });

    const userFound = await User.findById(user.id);
    if (!userFound)
      return res.status(401).json({ message: "token no autorizado" });

    return res.json({
      id: userFound._id,
      name: userFound.name,
      lastname: userFound.lastname,
      email: userFound.email,
      role: userFound.role,
    });
  });
};
