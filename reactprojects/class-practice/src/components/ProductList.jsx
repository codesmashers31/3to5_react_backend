import React, { useContext } from 'react'
import { AddContext } from '../context/AddContext'

const ProductList = () => {
    const {addCart}=useContext(AddContext)
  return (
    <div>
      <button onClick={addCart}>AddtoCart</button>
    </div>
  )
}

export default ProductList
