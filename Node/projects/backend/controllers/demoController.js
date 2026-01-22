export const demoBodyData = (req,res)=>{

    console.log(req.body);
    

}


export const demoparamsData =  (req,res)=>{

   console.log(req.params);
   console.log(req.body);
   

   const {user_id} = req.body


   const {userid } = req.params   


   console.log(userid);

   if(userid===user_id){
     res.status(200).json({userid})
   }else{
    res.status(404).json({msg:"Something wrong"})
   }


  

  
   


}


export const demoqueryData = (req,res)=>{

    console.log(req.query);

    const {userid,name,subject} = req.query

    console.log(userid,name,subject);
    
    
}



export const demoheaderData = (req,res)=>{


    console.log(req.headers.logindata);
    



}