import UserModel from "../model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import PDFDocument from 'pdfkit';

export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    if (!email || email.length === 0) {
        return res.status(400).json({message: "Invalid credentials"});
    }
    const user =await UserModel.findOne({ email: email});
    if (user && bcrypt.compareSync(password, user.password)) {
        const secret = "pbboysandhostel";
        const accessToken = jwt.sign({email: user.email}, secret, { expiresIn: '1h'});
        return res.status(200).json({accessToken, email: user.email, message: "Login Successfully"});
    }
    return res.status(400).json({message: "Invalid credentials"});
}

export const createUser = async (req, res) => {
    const {email, password} = req.body;

    try {
      const userExist = await UserModel.findOne({email});

      if (userExist) {
        return res.status(400).json({message: "User already exists"});
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const userData = {
        email,
        password: hashedPassword
      }

      const newUser = await UserModel.create(userData);

      return res.status(201).json({ message: "user successfully created"});
    } catch (error) {
       console.error(error);
       return res.status(500).json({message: "Internal server error"});
    }
}

export const generateInvoice = (req, res) => {
  const invoiceData = req.body;
  const doc = new PDFDocument();

  res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
  res.setHeader('Content-Type', 'application/pdf');

  doc.pipe(res);

  doc
    .fontSize(20)
    .text('P.B. Hostel Boys & Girls', { align: 'center' }).fontSize(10)
    .text('Near CV Raman University', { align: 'center' })
    .text('Bhagwanpur (Vaishali)', { align: 'center' })
    
  
  doc
    .fontSize(12)
    .text(`Invoice No: ${invoiceData.invoiceNumber}`, 50, 200)
    .text(`Date: ${new Date().toDateString()}`, 50, 220)
    .text(`Name: ${invoiceData.name}`, 50, 240)
    .text(`Address: ${invoiceData.address}`, 50, 260);

  doc
    .text('Description', 100, 300)
    .text('Amount', 400, 300);

  invoiceData.items.forEach((item, index) => {
    const y = 320 + (index * 20);
    doc.text(item.description, 100, y).text(item.amount, 400, y);
  });

  doc
    .text(`Next Payment Date: ${invoiceData.nextPaymentDate}`, 50, 480)
    .text('Signature', { align: 'right' });

  doc.end();
}