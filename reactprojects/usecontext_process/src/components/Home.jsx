import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
  
  //console.log(useContext(ThemeContext));
  
  const {getdata,themeChange} = useContext(ThemeContext)
  
  return (
   <>
    <div className={getdata?"bg-blue-500 text-white p-2 flex justify-between items-center":"bg-gray-600 text-white p-2 flex justify-between items-center"}>
      <div>
        Logo
      </div>
      <div className='flex gap-10'>
        <a href="">{getdata?"Light":"Dark"}</a>
        <button onClick={themeChange}>Theme Change</button>
      </div>
    </div>
   
   </>
  )
}

export default Home
