import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'


const App = () => {

const [showdata,setShowdata] = useState([])
const [editid,setEditid] = useState(false)

useEffect(()=>{

  const fetchdata = async()=>{

    const dataget = await axios.get("http://localhost:5000/api/users/show")
    
    //console.log(dataget.data.userdata);

    setShowdata(dataget.data.userdata)
    
  }

  fetchdata()

},[])

const editdata = async (edid)=>{

    if(edid){

      setEditid(edid) 

    }else{
        setEditid(false)
    }


}



// const Update = async (updateid)=>{


//   const updatedata = await axios.get(`http://localhost:5000/api/data/getdatabyid/${updateid,showdata.dataemail}`)



// }
  return (
    <>
    
    <div>
      <h1>
        Get the Datas From the data base
      </h1>
</div>
     

        {
          showdata.map((e)=>(
         
           <div key={e._id}>
             <h1 >{e.dataName}</h1>
                
              <p>{e.dataEmail}</p>  
       
            <button onClick={()=>editdata(e._id)}>Edit</button>

            <div>
           {editid === e._id && <><input type="text" placeholder="Enter the edited Name"  value={e.dataEmail}  /></>}
           
            </div>
           </div>
   
            
         
            

       
          ))
        }


      
   
    
    </>
  )
}

export default App