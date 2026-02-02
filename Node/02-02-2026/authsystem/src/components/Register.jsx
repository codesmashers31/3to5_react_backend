import { useState } from "react"
import axios from 'axios'

const Register = () => {

const [data,setData] = useState({name:"",email:"",password:""})

const handleChange = (e)=>{

setData({...data,[e.target.name]:e.target.value})

}
const handleSubmit = async(e)=>{


    e.preventDefault()


try{

    const res = await axios.post("http://localhost:5000/api/auth/register",data)
    console.log(res);
    
    alert(res.data.msg)

}catch(error){

    alert(error.responce.data.msg)

}


}


  return (
<>
   <div>Register</div>

    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" name="name"  />
      <input onChange={handleChange} type="email" name="email"  />
      <input onChange={handleChange} type="password" name="password"  />
      <input type="submit" value="Register" />
    </form>
</>
  )
}

export default Register
