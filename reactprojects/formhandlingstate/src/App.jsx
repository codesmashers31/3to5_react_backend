// import React, { useState } from 'react'

// const App = () => {
//   const [fromdatas,setFromdatas] = useState({fullname:"",age:"",subject:""})
//   const [error,setError] = useState("")

  
//   const handlechange = (e)=>{

//     setFromdatas({...fromdatas,[e.target.name]:e.target.value})

//   }

//  const handleSubmit = (e)=>{
//   e.preventDefault()
  
  
//  //console.log(fromdatas);
// setError(fromdatas)

//  }


//   return (
//   <>
//   <div>
//     <form onSubmit={handleSubmit}>
//        <input onChange={handlechange} name='fullname' type="text" placeholder='Enter the Name' />
//        <input onChange={handlechange} name='age' type="text" placeholder='Enter the Age' />
//        <input onChange={handlechange} name='subject' type="text" placeholder='Enter the Subject' />
//        <input  type="submit" value="Register" />
       
//     </form>
//     <p style={{color:"red"}}>{error.fullname},{error.age},{error.subject}</p>
   
//   </div>
//   </>
//   )
// }

// export default App


// useRef is the react Hooks
// its gives a mutable object
// it does not re-render the component
// Mostly used to access DOM Elements directly.


// import React, { useRef, useState } from 'react'

// const App = () => {
  
//   console.log('Running componenet');
  


//   const myform = useRef("")

//   const shworef = useRef("")
   
  // console.log(myRef.current);

  // const changecolor = ()=>{

  //   console.log('Running');
    

  //   myRef.current.innerText = "This is Ref"

  //   // console.log(myform.current);

  //   alert(myform.current)
    
  

  // }

  // const handletake = ()=>{

  //   //console.log(myform.current.value);

  //   const datas = myform.current.value
    
  //   shworef.current.innerText = datas

  // }


//   return (
//     <div>
//       <h1>Hello react Ref</h1>
    
//       <input onChange={handletake} type="text" ref={myform} />

//       <h1 ref={shworef}></h1>
//       {/* <button onClick={handlesubmit}>Chnage Style</button> */}


//     </div>
//   )
// }

// export default App



// 1. State using single object to handling the form.
// 2. Onsubmit using to push the code into array


// 1. h1 - h1 - button click show the different title
// 2. hide and show ref
// 3. Take the value form trhe Form





// import RefProcess from './components/RefProcess'

// function App() {
//   return (
//     <div>
//       <RefProcess/>
//     </div>
//   )
// }

// export default App
