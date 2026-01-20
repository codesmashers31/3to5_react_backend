// import { useReducer } from "react"

import { useEffect, useReducer } from "react"


// const App = () => {
//   const intialvalue = 0

//   const makereduce = (state,action)=>{

//     switch (action.type){
//       case "INCREMENT":
//         return state+1
//       case "DECREMENT":
//         return state-1
//       case "RESET":
//         return 0
//       default: 
//       return state
//     }



//   }


//   const [count,dispatch] = useReducer(makereduce,intialvalue)

//   return (
//     <div>
//       <h1>Reducer  Count {count}</h1>

//     <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
//     <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
//     <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
//     </div>
//   )
// }

// export default App

  const initalvalue = {name:"",email:""}

  const reducer = (state,action)=>{

    console.log(action);
    

    switch(action.type){
     
      case "INPUT_DATA":
        return {
          ...state,[action.field]:action.value
        }
      case "SUBMIT":
        localStorage.setItem("reducesave",JSON.stringify(state))

        return initalvalue

      case "RESET":
        return initalvalue

      case "TAKEDATA":
         
       return JSON.parse(localStorage.getItem("reducesave"))
         
      default:
            return state





    }



  }




const App = () => {


  const [state,dispatch] = useReducer(reducer,initalvalue)

  const handlechange = (e)=>{
    
   dispatch({
    type:"INPUT_DATA",
    field:e.target.name,
    value:e.target.value
   })



  }

  const handlesubmit = (e)=>{
    
  e.preventDefault()

dispatch({
  type:"SUBMIT"
})

alert("Succfully Save");


  }


  const resetfunction = ()=>{

    dispatch({
      type:"RESET"
    })

  }


  useEffect(()=>{

    const fetchdata = ()=>{

      dispatch(
        {
          type:"TAKEDATA"
        }
      )


    }

    fetchdata()

  },[])


  return (
    <div>
      <h1>Form Handling UseReaducer</h1>
      <form onSubmit={handlesubmit}>
         <input type="text" placeholder="Enter the Name" value={state.name}  name="name" onChange={handlechange} />
         <input type="text" placeholder="Enter the Email" value={state.email} name="email" onChange={handlechange} />
         <input type="submit" value="Register" />
         <button type="button" onClick={resetfunction}>Reset</button>
      </form>



      <h1>Name of the Vlaues</h1>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
    </div>
  )
}

export default App
