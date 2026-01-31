import dataModel from '../models/dataModel.js'

export const getthedata = async(req,res)=>{

    try {

        const getdata = await dataModel.find()

        // console.log(getdata);

        res.status(200).json({userdata:getdata})
        
        
    } catch (error) {
        console.log('Error',error);
        
    }

}


