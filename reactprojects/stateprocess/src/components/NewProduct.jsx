import React, { useEffect, useState } from 'react'
import {  useLocation } from 'react-router-dom'

const NewProduct = () => {

    const [datas,setDatas] = useState(0)

  const location = useLocation()

//    console.log(location.state);

   useEffect(()=>{
    (async()=>{
        setDatas(location.state)
    })()
   },[location.state])
   

  //const datas = location.state
  return (
    <div className='bg-gray-600 text-white'>
        New Product {datas.firstName}
    </div>
  )
}

export default NewProduct
