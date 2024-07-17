import { Router } from "express";
import userRoutes from "./UserRoutes.js";
import studentRoutes from "./StudentRoutes.js";
const routes = Router();

routes.use("/user", userRoutes);
routes.use("/student", studentRoutes);

export default routes;