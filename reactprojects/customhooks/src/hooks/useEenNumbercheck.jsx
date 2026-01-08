import React, { useState } from 'react'

const useEenNumbercheck = (getnumber=0) => {


  const [number,setNumber] = useState(getnumber)
  const [formdata,setFormData] = useState("")
  
  const handlechange = (e)=>{

    setNumber(Number(e.target.value))

  }

  const change = (e)=>{

    e.preventDefault()
    if (number%2===0) return setFormData("Event number") 
    else return (setFormData("Oddnumber"))

  }
  
  return {formdata,handlechange,change }

}

export default useEenNumbercheck
