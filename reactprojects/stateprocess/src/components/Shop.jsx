import { useState } from "react"


const Shop = () => {
 
    const [product,setProduct] = useState([
     {id:1,name:"React",qnt:1}
    ,{id:2,name:"Node",qnt:1}
    ,{id:3,name:"JS",qnt:2}])



   const increce = (id)=>{

    setProduct(product.map((elemnt)=>elemnt.id===id?{...elemnt,qnt:elemnt.qnt + 1}:elemnt))

   }

//     const decrece = (id)=>{

//     setProduct(product.map((e)=>e.id===id?{...e,qnt:e.qnt + 1}:e))

//    }




  return (
    <>
    <div className="bg-blue-200 p-5 h-50 flex justify-between">

         
         {product.map((item)=>(

         <div className="bg-white rounded p-3 w-50" key={item.id}>
            <h1>{item.name}</h1>
            <button onClick={()=>decrece(item.id)} className="bg-black text-white  p-1">-</button>{item.qnt}
            <button onClick={()=>increce(item.id)} className="bg-black text-white  p-1">+</button>
            <br/><br/>
            <button className="bg-black text-white  p-2 w-40">Add to Cart</button>
        </div>

         ))}


      
    </div>
    
    </>
  )
}

export default Shop
