import express from 'express';
import cors from 'cors';
import routes from "./routes/routes.js";
import mongoose from 'mongoose';
import {onRequest} from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";

import PDFDocument from 'pdfkit';
import verifyJWT from "./middleware/verifyjwt.js";


const app=express();


app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(cors());

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Welcome to PB Hostel API");
});



mongoose.connect(functions.config().mongodb.uri).then(()=>{
    
    logger.log(`Connected to the database`);
}).catch(err=> {
    logger.log("Not connected to database");
})

export const api  = onRequest(app);