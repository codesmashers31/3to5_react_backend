

import { Route, Routes } from 'react-router-dom'
import Loginpage from './components/Loginpage'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MainLayout from './components/MainLayout'

const App = () => {
  return (
  <>
 <Routes> 
<Route path='/login' element={<Loginpage />}/>

<Route element={<MainLayout/>}>

<Route path='/' element={<Home/>} />


</Route>

    
    
    

 </Routes> 
  </>
  )
}

export default App
