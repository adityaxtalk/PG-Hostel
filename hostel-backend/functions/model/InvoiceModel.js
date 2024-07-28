import mongoose from "mongoose";

const { Schema } = mongoose;

const InvoiceSchema = new Schema({
  invoiceNumber: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  items: [
    {
      description: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      }
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  paidAmount: {
    type: Number,
    required: true
  },
  nextPaymentDate: {
    type: Date,
    required: true
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  }
}, { timestamps: true });

export default mongoose.model("Invoice", InvoiceSchema);
