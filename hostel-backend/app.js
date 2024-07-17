import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import mongoose from 'mongoose';
import PDFDocument from 'pdfkit';
import verifyJWT from "./middleware/verifyjwt.js";

dotenv.config();

const app=express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(cors({ origin: true, credentials: true}));

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Welcome to PB Hostel API");
});

app.post('/generate-invoice', verifyJWT,(req, res) => {
    const invoiceData = req.body;
    const doc = new PDFDocument();
  
    res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
    res.setHeader('Content-Type', 'application/pdf');
  
    doc.pipe(res);
  
    doc
      .fontSize(20)
      .text('P.B. Hostel Boys & Girls', { align: 'center' })
      .fontSize(10)
      .text('Near CV Raman University', { align: 'center' })
      .text('Bhagwanpur (Vaishali)', { align: 'center' })
      .moveDown(4);
  
    doc
      .fontSize(12)
      .text(`Invoice No: ${invoiceData.invoiceNumber}`, 50, 100)
      .text(`Date: ${new Date().toDateString()}`, 50, 120)
      .text(`Name: ${invoiceData.name}`, 50, 140)
      .text(`Address: ${invoiceData.address}`, 50, 160);
  
    doc
      .moveDown()
      .text('Description', 50, 200)
      .text('Amount', 300, 200);
  
    invoiceData.items.forEach((item, index) => {
      const y = 220 + (index * 20);
      doc.text(item.description, 50, y).text(item.amount, 300, y);
    });
  
    doc
      .moveDown(2)
      .text(`Next Payment Date: ${invoiceData.nextPaymentDate}`, 50, 280)
      .text('Signature', { align: 'right' });
  
    doc.end();
  });

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT);
    console.log(`Listening on port ${PORT}`);
}).catch(err=> {
    console.log("Not connected to database");
})