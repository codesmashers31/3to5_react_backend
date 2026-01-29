import Users from "../model/userModel.js";

export const create = async(req,res)=>{


    try{

    // console.log(req.body);

    const saevdata = await Users.create(req.body)
    res.status(200).json({msg:"Succfully save",data:saevdata})
    

    }catch(err){
console.log('something error',err);
    }

}


export const getData = async(req,res)=>{

    try{

       const getdatafromdb = await Users.find()
       res.status(200).json({getdatafromdb})

    }catch(err){
        res.status(404).json({err})
    }

}


export const getbyid = async(req,res)=>{

    try {
   
        const {id} = req.params

        const useridgetdata = await Users.findById(id)

        res.status(201).json({useridgetdata})

        
    } catch (error) {
       res.status(404).json({error:"Data not get id is not valid"})
        
    }

}