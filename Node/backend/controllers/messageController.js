export const showingData = async(req,res)=>{

    console.log(req);
    
const {user} = req.body


        
//console.log(`${name},${subject}`);

if(user==="1234"){

  await res.status(200).json({data:"succfully"})
}else{
  await  res.status(404).json({data:"This is Not react We can't give the datas"})
}

}



export const getData = async(req,res)=>{

console.log(req.headers);

const {jwt} = req.headers

console.log(jwt);


}