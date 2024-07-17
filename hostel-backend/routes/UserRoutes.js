import { Router } from "express";
import { createUser, loginUser } from "../controllers/UserController.js";

const route= Router();


route.post("/create", createUser);
route.post("/login", loginUser);

export default route;