import React from 'react'
import { useLocation } from 'react-router-dom'

const Cards = () => {

  const location = useLocation()

   const produc = location.state.productsdata

  return (
      <div className="bg-gray-600 text-white p-10 h-100">
        <h1>{produc.id}</h1>
             <h1>{produc.name}</h1>
             <p> {produc.details}</p>
             <button className="bg-white rounded p-1 text-black">Buy Now</button>      
    </div>
  )
}

export default Cards
