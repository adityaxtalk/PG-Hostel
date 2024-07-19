import { Router } from "express";
import { getAllStudent, getStudentById, updateStudent, createStudent, deleteStudent } from "../controllers/StudentController.js";
import verifyJWT from "../middleware/verifyjwt.js";
const route= Router();


route.post("/create",verifyJWT, createStudent);
route.put("/update/:id", verifyJWT,updateStudent);
route.delete("/delete/:id", verifyJWT,deleteStudent);
route.get("/", verifyJWT,getAllStudent);
route.get('/:id', verifyJWT, getStudentById);

export default route;