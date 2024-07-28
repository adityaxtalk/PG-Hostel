import mongoose from "mongoose";

const {Schema} = mongoose;

const StudentSchema = new Schema({
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    nationality: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    residentPhone: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    pincode: {
        type: Number
    },
    permanentAddress: {
        type: String
    },
    permanentAddressPincode: {
        type: Number
    },
    motherName: {
        type: String
    },
    motherMobileNumber: {
        type: String
    },
    fatherName: {
        type: String
    },
    fatherMobileNumber: {
        type: String
    },
    guardianName: {
        type: String
    },
    guardianMobile: {
        type: String
    },
    guardianAddress: {
        type: String
    },
    aadharCard: {
        type: String
    },
    pancard: {
        type: String
    },
    admissionDate: {
        type: Date
    },
    invoices: [{
        type: Schema.Types.ObjectId,
        ref: 'Invoice'
      }]
}, {timestamps: true});

export default  mongoose.model("student", StudentSchema);