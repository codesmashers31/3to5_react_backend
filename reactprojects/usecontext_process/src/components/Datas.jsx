import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
const Datas = () => {

  const {getdata} = useContext(ThemeContext)
    
  return (
      <div className={getdata?"bg-blue-500 text-white p-10 h-100":"bg-gray-600 text-white p-10 h-100"}>
    <h1>{getdata?"Yes its light":"Yes its dark"}</h1>
    </div>
  )
}

export default Datas
