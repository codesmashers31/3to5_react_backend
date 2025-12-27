import { useState , useEffect } from "react"
import { Link } from "react-router-dom"
const LifeCycle = () => {

 const [tim,setTim] = useState(0)
 
    
//  console.log('Running');
 
 
     const timeup = ()=>{
 
          
         const timetoshow = setInterval(()=>{
             setTim(a=>a+1)
         },1000)
 
       
 
 
     }
 
     useEffect(()=>{
       timeup()
      
     },[])
 

// useEffect(()=>{
       
//       console.log(   "componenentDidUpdate()")
//      },[tim])
 




  return (
    <div>
      <div className='bg-gray-800 text-white p-4 h-100'>
        <h1>Life Cycle method - Class componenets</h1>
        <h1>Timer{tim}</h1>
        <br />
        <Link to="/about">Move to next Page</Link>
        <ul>
            <li>Class - componenentDidMount()   - Function {`useEffect(()=>{},[])`}</li>
            <li>Class - componenentDidUpdate()  - Function  {`useEffect(()=>{},[deps])`} </li>
            <li>class - componentWillUnMound()  - Function  {`useEffect(()=>{
                return () => },[deps])`}</li>
        </ul>
      </div>
    </div>
  )
}

export default LifeCycle
