import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Products = () => {

  const [newproduct,setNewProduct] = useState([]);


  const [count,setCount] = useState(0)

  // const location = useLocation()
  const navidate = useNavigate()
 const productFetch = async()=>{

         const res = await fetch("https://dummyjson.com/users");
         const datachange = await res.json()
         //console.log(datachange.users);
         setNewProduct(datachange.users)

 }


 const handleclick = (id)=>{

<button className='bg-amber-300 p-1 mt-10 ml-10 rounded' onClick={productFetch}>Product Showing</button>    
const datas = newproduct.find((e)=>e.id==id)

    console.log(datas)
   
    //alert(`Fullname ${datas.firstName}, ${datas.age}`)

navidate("/newproduct", {state:datas})

 }

 const change = ()=>{

setCount(count+1)


 }


 useEffect(()=>{

  console.log('UseEffect Running');
  
     productFetch()

     
 },[count])

 useEffect(()=>{
  
    setNewProduct(3)
 },[])


  return (
    <>
        {/*  */}

        <div className='bg-gray-600 text-white p-5 h-full mt-10 flex gap-5 flex-wrap'>
          {newproduct.map((e)=>(
             
             <div className='bg-white text-black p-2 h-80 rounded w-80' key={e.id}>
                <img src={e.image} alt="" />
                <h3>id:{e.id}</h3>
                <h2>firstName:{e.firstName}</h2>
                <h3>age:{e.age}</h3>
                <p>email:{e.email}</p>
                <button className='bg-black p-1 w-30 text-white rounded' onClick={()=>handleclick(e.id)}>View More</button>
          </div>

          ))}


          <h1 className='bg-yellow-300 p-3 text-black'>{count}</h1>
          <button onClick={change}>Click Change </button>
        </div>
    </>
  )
}

export default Products
