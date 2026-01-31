import { useEffect, useState } from "react"
import axios from 'axios'

const App = () => {

const [datas,setDatas] = useState([])
const [editdatas,setEdit] = useState([])
const handleedit = async(id)=>{

const res = await axios.get(`http://localhost:5000/api/data/getdatabyid/${id}`)
console.log('res edit',res);

setEdit(res.data.gedbyid)

}

const handledelete = async(id)=>{

alert(id)

}
useEffect(()=>{
  const fetchdata = async()=>{

    const res = await axios.get("http://localhost:5000/api/data/getdata")
    
    console.log(res);
    
    setDatas(res.data.newdatas)

  }
  fetchdata()
},[])
 

  return (
    <>
   {datas.map((e)=>(
    <div key={e._id}>
<h1>{e.dataName}</h1>
<p>{e.dataEmail}</p>

<button onClick={()=>handleedit(e._id)}>Edit</button>
<button onClick={()=>handledelete(e._id)}>Delete</button>
    </div>
   ))}



     
<h1>{editdatas.dataName}</h1>
<p>{editdatas.dataEmail}</p>

  
 
    </>
  )
}

export default App