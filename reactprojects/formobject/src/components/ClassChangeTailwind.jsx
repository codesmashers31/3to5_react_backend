import React, { useEffect, useRef } from 'react'

const ClassChangeTailwind = () => {

    const myref = useRef(null)
     
     useEffect(()=>{

        myref.current.style.backgroundColor = "blue"

     },[])


  return (
   <>
   <div ref={myref}>
     <h1>This is Dev</h1>
   </div>
   </>
  )
}

export default ClassChangeTailwind
