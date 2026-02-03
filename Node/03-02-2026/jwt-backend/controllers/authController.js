
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// REGISTER
export const registerUser = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);

  await User.create({
    email: req.body.email,
    password: hashed
  });

  res.json({ message: "Registered" });
};

// LOGIN
export const loginUser = async (req,res)=>{

    const {email,password} = req.body


    const user = await User.findOne({email})

    console.log('email data ',user);
    

    if(!user) {
        return res.status(400).json({msg:"Email Invalid"})
    }

    const matchpassword = await bcrypt.compare(password, user.password);
   console.log('matchpassword',matchpassword);
   
   if(!matchpassword) {
    return res.status(400).json({msg:"Password Invalid"})
   }

const token = jwt.sign({id:user._id, email:user.email},process.env.JWT_SECRET,{expiresIn:"2h"})

res.status(200).json({msg:"Succfully done",token})


}

// DASHBOARD
export const dashboard = (req, res) => {

    //console.log(req);
    
  res.json({ message: `Welcome ${req.user.email}` });
};
