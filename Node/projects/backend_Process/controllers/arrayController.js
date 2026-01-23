let usersDataSave = []


export const Create = async(req,res)=>{

    //console.log(req);

    try {

        const newUser = {id:usersDataSave.length+1,...req.body,createdBy:req.headers.authorization || "Not Valid User"}


        usersDataSave.push(newUser)

        res.status(201).json(
            {
                msg:"User Data Added",
                data:newUser
               

            }
        )
        
    } catch (error) {

        console.log('something error',error);
        
        
    }
    

}


export const GetData = async(req,res)=>{


    try {

        

        const getdatas = usersDataSave

        res.status(200).json({getdatas})
        
    } catch (error) {

        console.log('Something error',error);
        
        
    }


}



export const getById = (req,res)=>{

    try {
        
        console.log(req.body);
        
        const {userid} = req.body

        const databyid = usersDataSave.find((e)=>e.id===Number(userid))

        res.status(200).json({databyid})
        
    } catch (error) {

         console.log('Something error',error);
        
    }

}
