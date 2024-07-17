import UserModel from "../model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    if (!email || email.length === 0) {
        return res.status(400).json({message: "Invalid credentials"});
    }
    const user =await UserModel.findOne({ email: email});
    if (user && bcrypt.compareSync(password, user.password)) {
        const secret = process.env.ACCESS_TOKEN_SECRET || "";
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
