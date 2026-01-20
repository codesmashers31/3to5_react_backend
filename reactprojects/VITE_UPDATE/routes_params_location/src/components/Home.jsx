import React, { useState } from 'react'
import Loginpage from './Loginpage'

const Home = () => {
    const [datas,setData] = useState({name_new:"Recat"})

    const updatefunction = ()=>{
        setData({...datas,name_new:"react new"})
    }
  return (
    <div>
      <Loginpage values_data =  {datas} update_function = {updatefunction} />
    </div>
  )
}

export default Home
