// import { useState } from "react";
// import axios from "axios";

// export default function App() {

//   const [age, setAge] = useState("");
//   const [msg, setMsg] = useState("");

//   const submit = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/middle/submit", { age });
//       setMsg(res.data.msg);
//     } catch (err) {
//       setMsg(err.response.data.msg);
//     }
//   };

//   return (
//     <div style={{ padding: 30 }}>
//       <h2>Age Check Form</h2>

//       <input
//         type="number"
//         placeholder="Enter Age"
//         onChange={(e) => setAge(e.target.value)}
//       />

//       <button onClick={submit}>Submit</button>

//       <h3>{msg}</h3>
//     </div>
//   );
// }



import axios from 'axios'
import React, { useEffect, useState } from 'react'




const App = () => {
  const [form,setForm] = useState({name:"",email:"",age:""})
  const [savedata,setSavedata] = useState([])
  const [editId,setEditid] = useState("")
  const handle = (e)=>{

    const data = e.target.value
    const dataname = e.target.name

    setForm({...form, [dataname]:data})

  }


  const handlesubmit = async(e)=>{

    e.preventDefault()

   const added = await axios.post("http://localhost:5000/api/user/added",form)
   alert(added.data.msg)


  }


  useEffect(()=>{
    const fetchdata = async ()=>{

    const res = await axios.get("http://localhost:5000/api/user/getdata")
    //console.log(res);
    
    setSavedata(res.data)
     

    }

    fetchdata()
  },[])



  const handleedit =async (userid)=>{

    setEditid(userid._id)

    
    setForm({name:userid.name,email:userid.email,age:userid.age})
    
     
  }


 const updateprocess = async(e)=>{
  e.preventDefault()

  const res =await axios.put(`http://localhost:5000/api/user/update/${editId}`,form)
   

  alert(res.data.msg);
 
 }


const handledelete = async (id)=>{

  const res = await axios.delete(`http://localhost:5000/api/user/delete/${id}`)
  
 alert(res.data.msg)

}


  return (
    <>
    <form>
      <input name="name" placeholder="Name" value={form.name} onChange={handle} />
      <input name="email" placeholder="Email" value={form.email} onChange={handle} />
      <input name="age" placeholder="Age" value={form.age} onChange={handle} />
      
     {editId?<button onClick={updateprocess}>Update</button>:<button onClick={handlesubmit}>Register</button>}
    </form>
    
    
    


    <div>
      {savedata.map((e)=>(
        
       <>
        <h1 key={e._id}>{e._id},{e.name},{e.age},{e.email}</h1>
        <button onClick={()=>handleedit(e)}>Edit</button>  ||  <button onClick={()=>handledelete(e._id)}>Delete</button>
       </>

      ))}
    </div>
    </>
  )
}

export default App

