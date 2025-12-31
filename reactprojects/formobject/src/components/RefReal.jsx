import React, { useEffect, useRef } from 'react'

const RefReal = () => {

  const mynameRef = useRef("")
  
    useEffect(()=>{
        const autosavedata = localStorage.getItem("autosave")
        if(autosavedata){
              mynameRef.current.value = autosavedata
        }
    },[])


  

    const handleChange = ()=>{

        const datas = mynameRef.current.value;
        localStorage.setItem("autosave",datas)


    }
  return (
    <>
    <div>
        <h2>Auto Save Form (Use Ref + Local Storage)</h2>
        <input type="text" placeholder='Entre Your Name' ref={mynameRef} onChange={handleChange} />
    </div>
    
    </>
  )
}

export default RefReal
