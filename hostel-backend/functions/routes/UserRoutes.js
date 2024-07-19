import { Router } from "express";
import { createUser, loginUser, generateInvoice } from "../controllers/UserController.js";

const route= Router();


route.post("/create", createUser);
route.post("/login", loginUser);
route.post("/generate-invoice", generateInvoice);
export default route;