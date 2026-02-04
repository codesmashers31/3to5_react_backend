export const checkAge = (req,res,next)=>{

    

        //console.log(req);

        if(req.body.age < 18) {
         res.status(200).json({msg:"Not verified"})
             return
        }

       next()
  

}