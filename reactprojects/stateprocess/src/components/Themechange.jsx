import React, { useState } from 'react'
import HideandShow from './HideandShow'

const Themechange = () => {


 const [theme,setTheme] =useState(true)


  return (
    <>
    <div className={theme?"bg-gray-700 text-white p-3 flex justify-between":"bg-white text-black p-3 flex justify-between"}>
        <div>
          LOGO
        </div>
        <div className='flex gap-10'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contect</a>
        </div>

        <button onClick={()=>setTheme(!theme)} className={theme?"bg-amber-50 text-black p-1 rounded w-20":"bg-black text-white p-1 rounded w-20"}>{theme?"Light":"Dark"}</button>
    </div>

   
    </>
  )
}

export default Themechange
