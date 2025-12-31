import React, { useRef } from 'react'

const TailwindCssRef = () => {
  
    const inputRef = useRef()
    const boxRef = useRef()

    const handlechange = ()=>{
         
      const datas = inputRef.current.value.toLowerCase().trim()

    
    
     if(datas==="blue"){

        boxRef.current.classList.add("bg-blue-500")

     }
   
  
  

      // alert(datas)


    }

  return (
    <>
    <div className='bg-blue-700 text-white p-5 h-100'>
     <h1>Ref Using Tailwind</h1>
     <input type="text" className='bg-white rounded w-40 p-1 text-black' placeholder='Enter the Color' ref={inputRef} onChange={handlechange} />
    </div>

    <div ref={boxRef} className=''> 

      <h1>Box</h1>

    </div>
    
    </>
  )
}

export default TailwindCssRef
