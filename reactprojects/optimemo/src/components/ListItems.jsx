import React, { useEffect, useState } from 'react'

const ListItems = ({getItem}) => {

const [list,setList] = useState([])


useEffect(()=>{
    setList(getItem(20))
},[getItem])



  return (
   <>
   <div>
    <h1>List f idemas</h1>
   {list.map((e,i)=>
  <p key={i}>{e}</p>

)}
   </div>
   </>
  )
}

export default ListItems
