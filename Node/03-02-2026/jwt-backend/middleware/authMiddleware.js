import jwt from "jsonwebtoken";

const authMiddleware = (req, res , next)=>{

 const token = req.headers.authorization?.split(" ")[1];

 if(!token){
    return res.status(404).json({msg:"No Token"})
 }

 try {

    
   const decode = jwt.verify(token, process.env.JWT_SECRET)
   //console.log(decode);
   
    req.user = decode
    next()
    
 } catch (error) {

   console.log(error);
   
    
 }


}


export default authMiddleware