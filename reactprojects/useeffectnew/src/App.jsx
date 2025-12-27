
// import { useEffect, useState } from 'react'

import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import LifeCycle from "./components/LifeCycle"
import NewTimer from "./components/NewTimer"
import Timer from "./components/Timer"


const App = () => {

  // const [data,setData] = useState([])



  // console.log('I am the main componenets')

  
 


  // useEffect(()=>{

  //   console.log('I am useEffect');
    

  //     const fetchapi = async()=>{

  //    const takethelink = await fetch("https://dummyjson.com/products");
  //    const changedata = await takethelink.json();

  //    setData(changedata.products)



  // }

  //     fetchapi()

 


  // },[])








  return (
   <>
   <div>UseEffect Process</div>
  


  {/* <div>
    {data.map((e)=>(
      <h1 key={e.id}>{e.title}</h1>
    ))}
  </div> */}



{/* <Timer/> */}
{/* <NewTimer/> */}



<Routes>

  <Route path="/about" element={<About/>} />
  <Route path="/" element={<LifeCycle/>} />
</Routes>
    
   </>
  )
}

export default App


