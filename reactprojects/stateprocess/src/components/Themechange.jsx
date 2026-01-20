import React, { useState } from 'react'
import HideandShow from './HideandShow'

const Themechange = () => {


 const [theme,setTheme] =useState(true)


  return (
    <>
    <div className={theme?"bg-gray-700 text-white p-3 flex justify-between":"bg-white text-black p-3 flex justify-between"}>
        <div>
          LOGO
        </div>
        <div className='flex gap-10'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contect</a>
        </div>

        <button onClick={()=>setTheme(!theme)} className={theme?"bg-amber-50 text-black p-1 rounded w-20":"bg-black text-white p-1 rounded w-20"}>{theme?"Light":"Dark"}</button>
    </div>

   
    </>
  )
}

export default Themechange







// State - it is the object - in class components - the main work is 
// to showing to datas on the screen -  state is a read only  - when the state is bacome the update mode
// its re-render the components -  


// When we use the Functional components - useState() - to allow the state and state update function in the same function hooks that is called useState.apply


// we can declare or init - using primitive and non primitive data types . 


// when you want to use state . - 


// Create - store


