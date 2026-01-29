import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

 const [datasave,setDataSave] = useState([])


 const fetchdata = async (e) => {

  e.preventDefault()
  const datafetch = await axios.get("http://localhost:5000/api/create/getdatas")


console.log(datafetch);



  setDataSave(datafetch.data.getdatafromdb);
  
  

 }

  return (
    <>
    
    <button onClick={fetchdata}>Save data</button>

{datasave.map((e)=>(
 <h1 key={e._id}>{e.name}</h1>
))}
    

    </>
  )
}

export default App