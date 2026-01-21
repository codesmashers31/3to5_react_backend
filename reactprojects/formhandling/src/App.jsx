import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {

const [user,setUser] = useState("")
const [fromdatas,setFormDatas] = useState("")

const handlchange = (e)=>{

  
 setUser(e.target.value)


}

const handleSubmit = async(e)=>{
e.preventDefault()

// setFormDatas(user)
// if(fromdatas%2===0){
//   setFormDatas(fromdatas)
// }else{
//    setFormDatas(fromdatas)
// }
  
//console.log(user);

const res = await axios.post("http://localhost:5000/api/message/create",{user})

console.log(res);

const newdata = res.data.data
console.log(newdata);


setFormDatas(newdata)


}

  return (
   <>
   <form >

    {fromdatas}
    <input onChange={handlchange} type="number" placeholder='Enter the Number' style={{backgroundColor:"white",color:"black",padding:"10px",width:"600px"}}  />
    <button onClick={handleSubmit}>Onclick</button>
    <h1>{fromdatas?`Even ${fromdatas}`:"odd Number"}</h1>
   </form>
   
   </>
  )
}

export default App




