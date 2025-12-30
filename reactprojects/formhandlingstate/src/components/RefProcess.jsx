import React, { useRef, useState } from 'react'

function RefProcess() {
    console.log('Running The compoenent');
    
    // const [title,setTitle] = useState("")

    const show = useRef("")
 
    const handleClick =()=>{

       show.current.innerText = "This is Ref" 

    }

  return (
   <>
    <div ref={show}></div>
    <button onClick={handleClick}>Click The Process</button>
   </>
  )
}

export default RefProcess
