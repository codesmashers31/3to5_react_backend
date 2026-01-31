import dataModel from "../models/dataModel.js"

export const dataCreate = async(req,res)=>{


   const {data_id,dataName,dataEmail,dataAge} = req.body
    
     await dataModel.create(req.body)

    
    res.status(200).json("Added Succfully")


    

}


export const dataget = async(req,res)=>{



    
    const getdata = await dataModel.find()

     res.status(200).json({newdatas:getdata})
     




}



export const datagetbyId = async(req,res)=>{

      try {
       
        console.log(req.params.databy_id);
        
        

        const gedbyid = await dataModel.findById(req.params.databy_id)

        res.status(200).json({gedbyid})
        
      } catch (error) {

         res.status(404).json({error})
        
      }


}


export const deletedata = async (req,res)=>{


    try {

        const deletedatas = await dataModel.findByIdAndDelete(req.params.databy_id)
         
        res.status(200).send("Deleted Succfully")

        console.log(res);
        
    } catch (error) {
        console.log(error);
        
    }
    
}



