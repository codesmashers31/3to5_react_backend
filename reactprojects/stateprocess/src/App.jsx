import React from 'react'
import ShappingCart from './components/ShappingCart'
import Themechange from './components/Themechange'
import HideandShow from './components/HideandShow'
import Shop from './components/Shop'
import Products from './components/Products'
import StarRating from './components/StarRating'
import { Route, Routes } from 'react-router-dom'
import NewProduct from './components/NewProduct'

const App = () => {
  return (
   <>
   {/* <Themechange/>
   <ShappingCart/>
   <HideandShow/> */}

   {/* <Shop/> */}
   <Products/>

   {/* <StarRating/> */}

   <Routes>

    <Route path="/newproduct" element={<NewProduct/>} />
         </Routes>

   </>
  )
}

export default App
