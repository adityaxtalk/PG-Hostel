import UserModel from "../model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import PDFDocument from 'pdfkit';
import Invoice from "../model/InvoiceModel.js";
import Student from "../model/StudentModel.js";
import path from 'path';
import { fileURLToPath } from 'url';

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

export const generateInvoice = async (req, res) => {
  try {

    const invoiceData = req.body;

    if (!invoiceData._id) {
      const student = await Student.findById(invoiceData.id);

      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      // Create a new invoice document
      const newInvoice = new Invoice({
        invoiceNumber: invoiceData.invoiceNumber,
        date: invoiceData.date,
        address: invoiceData.address,
        items: invoiceData.items,
        totalAmount: invoiceData.totalAmount,
        paidAmount: invoiceData.paidAmount,
        nextPaymentDate: invoiceData.nextPaymentDate,
        student: student._id
      });
  
      // Save the invoice to the database
      await newInvoice.save();
  
      // Optionally, add the invoice to the student's invoices array
      student.invoices.push(newInvoice._id);
      await student.save();
  
  
  
    }
    
  
  // Create a new PDF document
  const doc = new PDFDocument({ size: 'A4', margin: 50 });

  // Set the response headers
  res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
  res.setHeader('Content-Type', 'application/pdf');

  // Pipe the PDF document to the response
  doc.pipe(res);

  // Set yellow background
  const pageWidth = doc.page.width + 300;
  const pageHeight = doc.page.height + 300;
  doc.rect(0, 0, pageWidth, pageHeight).fill('#FFFF99');

    generateHeader(doc);
    generateCustomerInformation(doc, invoiceData);
    generateInvoiceTable(doc, invoiceData);
    generateFooter(doc, invoiceData);
    
  
  // End the PDF document
  doc.end();
  } catch (error ) {
      res.status(500).json({ message: error.message });
  }
};

function generateHeader(doc) {
  doc
    .fillColor("#444444")
  const pageWidth = doc.page.width;
  const text1 = 'Owner: Amar Kumar Pandey';
  const text2 = 'Shri Ganeshaya Namah';
  const text3 = 'Mobile: 9708400495, 9939449414';

  // Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
  doc
    .fontSize(10)
    .text(text1, 50, 50); // Left-aligned text

  const text2Width = doc.widthOfString(text2);
  doc
    .text(text2, (pageWidth - text2Width) / 2, 50); // Centered text

  const text3Width = doc.widthOfString(text3);
  doc
    .text(text3, pageWidth - 70 - text3Width, 50); // Right-aligned text

  doc.moveDown(1);
  doc
    .fontSize(20);
  const title1 = 'P.B. Hostel Boys & Girls';
  const title1Width = doc.widthOfString(title1);
  doc.text(title1, (pageWidth - title1Width) / 2, doc.y);

  doc.fontSize(10);
  const title2 = 'Near CV Raman University';
  const title2Width = doc.widthOfString(title2);
  doc.text(title2, (pageWidth - title2Width) / 2, doc.y);

  const title3 = 'Bafapur Banthu, Bhagwanpur (Vaishali)';
  const title3Width = doc.widthOfString(title3);
  doc.text(title3, (pageWidth - title3Width) / 2, doc.y);

  // Add the logo
  const logoPath = path.resolve(__dirname,'../logo.png');; // Replace with the correct path to your logo
  const logoWidth = 100; // Adjust the width as needed
  const logoHeight = 100; // Adjust the height as needed
  const logoX = (pageWidth - logoWidth) / 2;
  const logoY = doc.y; // Position below the text

  doc.image(logoPath, logoX, logoY, { width: logoWidth, height: logoHeight });


}

function generateCustomerInformation(doc, invoice) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Invoice", 50, 250);

  generateHr(doc, 285);

  const customerInformationTop = 300;

  doc
    .fontSize(10)
    .text("Invoice Number:", 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(invoice.invoiceNumber, 150, customerInformationTop)
    .font("Helvetica")
    .text("Invoice Date:", 50, customerInformationTop + 15)
    .text(formatDateToDDMMYYYY(new Date(invoice.date)), 150, customerInformationTop + 15)
    .text("Balance Due:", 50, customerInformationTop + 30)
    .text(
      (invoice.totalAmount - invoice.paidAmount),
      150,
      customerInformationTop + 30
    )

    .font("Helvetica-Bold")
    .text(invoice.name, 300, customerInformationTop)
    .font("Helvetica")
    .text(invoice.address, 300, customerInformationTop + 15)
    .moveDown();

  generateHr(doc, 352);
}

function generateInvoiceTable(doc, invoice) {
  let i;
  const invoiceTableTop = 380;

  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    invoiceTableTop,
    "Sr. No",
    "Description",
    "",
    "Amount"
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font("Helvetica");

  for (i = 0; i < invoice.items.length; i++) {
    const item = invoice.items[i];
    const position = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
      doc,
      position,i+1,
      item.description,
      "",
      item.amount
    );

    generateHr(doc, position + 20);
  }

  const subtotalPosition = invoiceTableTop + (i + 1) * 30;
  generateTableRow(
    doc,
    subtotalPosition,
    "",
    "",
    "Subtotal",
    invoice.totalAmount
  );

  const paidToDatePosition = subtotalPosition + 20;
  generateTableRow(
    doc,
    paidToDatePosition,
    "",
    "",
    "Paid To Date",
    invoice.paidAmount
  );

  const duePosition = paidToDatePosition + 25;
  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    duePosition,
    "",
    "",
    "Balance Due",
    (parseFloat(invoice.totalAmount) - parseFloat(invoice.paidAmount))
  );
  doc.font("Helvetica");
}

function formatDateToDDMMYYYY(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
}

function generateFooter(doc, invoice) {
  const bottomY = doc.page.height - doc.page.margins.bottom - 30; // Adjust the 30 value to fit your needs
  
  const nextPaymentText = `Next Payment Date: ${formatDateToDDMMYYYY(new Date(invoice.nextPaymentDate))}`;
  const signatureText = 'Signature';

  // Get the width of the texts
  const nextPaymentTextWidth = doc.widthOfString(nextPaymentText);
  const signatureTextWidth = doc.widthOfString(signatureText);

  // Calculate the positions
  const nextPaymentTextX = doc.page.margins.left;
  const signatureTextX = doc.page.width - doc.page.margins.right - signatureTextWidth - 50;

  doc
    .fontSize(12)
    .text(nextPaymentText, nextPaymentTextX, bottomY)
    .text(signatureText, signatureTextX, bottomY);
}

function generateTableRow(
  doc,
  y,
  srNo,
  description,
  title,
  amount
) {
  doc
    .fontSize(10)
    .text(srNo, 50, y)
    .text(description, 150, y)
    .text(title, 280, y, { width: 90, align: "right" })
    .text(amount, 0, y, { align: "right" });
}

function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}