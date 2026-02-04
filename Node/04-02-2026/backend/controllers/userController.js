import User from "../models/User.js";

// CREATE
export const addUser = async (req, res) => {

    console.log(req.body);
    
  const user = await User.create(req.body);
  res.json({msg:"Succfully added"});
};

// READ
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// UPDATE


export const updateUser = async(req,res)=>{

//console.log(req);

const {id} = req.params
const {name,email,age} = req.body

const update = await User.findByIdAndUpdate(id,{name,email,age},{new:true})


res.status(200).json({msg:"Succfully updated"})


}


export const deleteUser = async(req,res)=>{

//console.log(req);

const {id} = req.params
 
const deleteres = await User.findByIdAndDelete(id)


res.status(200).json({msg:"are you sure to delete?"})

}
