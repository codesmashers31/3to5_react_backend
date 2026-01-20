import { useState } from "react"
import Presentational from "../pages/Presentational"
import AddtoCard from "../pages/AddtoCard"


const Container = () => {

 const [count,setCount] = useState(0)
 const [cart,setCart] = useState(0)

 const increment = ()=>{

   setCount(count+1)
   setCart(cart+4)

 }


  const increment_one = ()=>{

  
   setCart(cart+4)

 }

 const decrement = ()=>{

   setCount(count-1)
   setCart(cart+4)

 }


  return (
    <div>
      <Presentational  value={count} onAdd = {increment} onSub = {decrement}   />
      <AddtoCard value_1={cart} onAdd_1 = {increment_one} />
    </div>
  )
}

export default Container
