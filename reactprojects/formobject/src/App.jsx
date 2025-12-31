// import React, { useEffect, useState } from 'react'

// const App = () => {
 
//   const [form,setForm] = useState({name:"",age:"",email:"",password:""})
//   const [error,setError] = useState("")
//   const [datas,setdatas] = useState({})

//   // Take the value form Input
  
//   const handleGetDatas = (e)=>{

//     setForm({...form,[e.target.name]:e.target.value})

//   }

// const handleSubmit = (e)=>{
//   e.preventDefault()

//   const {name,age,email,password} = form;

//   if(name === "" || age === "" || email==="" || password===""){

//                setError("Enter the Empty Feilds")
//   }
//   else if(!email.includes("@") || !email.includes(".")){

//             setError("Enter the Valid Email")
//   } 

//   else if(age < 18){
//     setError("Enter the Valid age")
    
//   }

//   else if (password.length <= 8){
//            setError("Enter the Strong Password Minimum Above 8") 
//   }

//   else{
    
    
//     localStorage.setItem("users",JSON.stringify(form))
//     setError("") 
//     alert('Form Succfully Done')
//     setForm({name:"",age:"",email:"",password:""})
//   }



// }




// useEffect(()=>{

//   console.log('Running');
  
//   const datatake = ()=>{

//   const getdata = localStorage.getItem("users")
//   const store = JSON.parse(getdata)
//   setdatas(store)


// }
//       datatake()
// },[form])



//   return (
//     <>
//     <div>
//       Form Handling
      
//     </div>
    
    

// <form onSubmit={handleSubmit}>
//     <label>Enter the Name</label>
//     <input type="text" name='name' value={form.name} onChange={handleGetDatas} placeholder='Enter the Cap-name' />
//     <br />
  
//         <label>Enter the Age</label>
//     <input type="text" name='age' value={form.age} onChange={handleGetDatas} placeholder='Eligiable only 19' />
//     <br />
   
//         <label>Enter the email</label>
//     <input type="email" name='email' value={form.email} onChange={handleGetDatas} placeholder='Enter the valid email' />
//     <br />
        
//         <label>Enter the password</label>
//     <input type="text" name='password' value={form.password} onChange={handleGetDatas} placeholder='Enter the password maximum 8 cha' />


//     <input type="submit" value="Regiter" />

    
// </form>

// <p style={{color:"red"}}>{error}</p>


// <div>
//   <h1>{datas.name}</h1>
// </div>
    
//     </>
//   )
// }

// export default App



import React from 'react'
import RefReal from './components/RefReal'
import ClassChangeTailwind from './components/ClassChangeTailwind'
import TailwindCssRef from './components/TailwindCssRef'

const App = () => {
  return (
    <div>
      {/* <RefReal/> */}
      <ClassChangeTailwind/>
      {/* <TailwindCssRef/> */}
    </div>
  )
}

export default App
