import React, { useState } from 'react'

const ShappingCart = () => {

 const [product,setProduct] = useState({productname:"Laptop"})



 
//  console.log(data[0].productname="Key");


 

 const chage = ()=>{

  console.log({...product});
  
   
  setProduct({...product,productname:"Board"})


}

  return (
       
    <div className='bg-amber-300 p-5 h-100'>
        <button onClick={chage} className='bg-gray-800 text-white p-1 rounded w-50'>Change the text</button>
        <h1>{product.productname}</h1>

    </div>
  )
}

export default ShappingCart






// const obj = {name:"React"}

// obj.name = "Node"