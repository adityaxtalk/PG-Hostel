import mongoose from "mongoose";

const {Schema} = mongoose;

const UserSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true});

export default  mongoose.model("users", UserSchema);