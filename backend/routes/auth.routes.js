import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
import pkg from "jsonwebtoken";

const { sign } = pkg;

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", login);
authRouter.get("/logout", logout);

export default authRouter;

