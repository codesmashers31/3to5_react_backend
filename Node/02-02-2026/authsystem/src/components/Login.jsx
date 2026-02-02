import { useState } from "react"
import axios from 'axios'

const Login = () => {

const [data,setData] = useState({email:"",password:""})

const handleChange = (e)=>{

setData({...data,[e.target.name]:e.target.value})

}
const handleSubmit = async(e)=>{


    e.preventDefault()


try{

    const res = await axios.post("http://localhost:5000/api/auth/login",data)
    //console.log(res);
    
    alert(res.data.msg)

}catch(error){

    console.log (error.responce.data.error);
   

}


}


  return (
<>
   <div>Login</div>

    <form onSubmit={handleSubmit}>
       <input onChange={handleChange} type="email" name="email"  />
      <input onChange={handleChange} type="password" name="password"  />
      <input type="submit" value="Register" />
    </form>
</>
  )
}

export default Login
