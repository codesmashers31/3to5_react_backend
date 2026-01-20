import React from 'react'
import { useState } from 'react'

const App = () => {

const [user,setUser] = useState("")
const [fromdatas,setFormDatas] = useState("")

const handlchange = (e)=>{

  
 setUser(e.target.value)


}

const handleSubmit = (e)=>{
e.preventDefault()

setFormDatas(user)
if(fromdatas%2===0){
  setFormDatas(fromdatas)
}else{
   setFormDatas(fromdatas)
}
  

}

  return (
   <>
   <form >
    <input onChange={handlchange} type="number" placeholder='Enter the Number' style={{backgroundColor:"white",color:"black",padding:"10px",width:"600px"}}  />
    <button onClick={handleSubmit}>Onclick</button>
    <h1>{fromdatas?`Even ${fromdatas}`:"odd Number"}</h1>
   </form>
   
   </>
  )
}

export default App




