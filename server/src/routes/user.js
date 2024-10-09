import { Router } from "express";
import { UserModel } from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await UserModel.findOne({ username });
    const useremail = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }
    if (useremail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.json({ message: "Ok User registered successfully now login" });
  } catch (error) {
    console.log(`Please check this error ${error}`);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      //comparing passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      //Creating a jwt token for user

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
      return res.status(200).json({token,userId:user._id})
    }
    return res.status(400).json({ message: "User does not exist" });
  } catch (error) {
    console.log(`An error occurred ${error}`);
  }
});

export const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.authorization
    if(authHeader){
        jwt.verify(authHeader,process.env.JWT_SECRET_KEY,(error)=>{
            if(error){
                return res.status(401).json({message:"Invalid token"})
            }
            next()
        })

    }
    return res.sendStatus(401);


}

export { router as userRouter };
