export const userController = (req,res)=>{

    //console.log(req.body);

    const {name,subject} = req.body


    console.log(name);

    if(name){
        res.status(200).json({name,data:{amount:1000}})
    }
    

    // Logic
    // DB+Own Logic


    //res.status(200).json(users)
    

}

// http://localhost/5000/api/users/auth