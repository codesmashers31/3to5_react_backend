import React, { useEffect, useState } from 'react'

const NewTimer = () => {
 
    const [time,setTime] = useState(0)


    const timeup = ()=>{

         
        const timetoshow = setInterval(()=>{
            setTime(prev=>prev+1)
        },1000)

        return ()=> clearInterval(timetoshow)


    }

    useEffect(()=>{
        timeup()
    },[])

  return (
    <div>
      {time}
    </div>
  )
}

export default NewTimer
