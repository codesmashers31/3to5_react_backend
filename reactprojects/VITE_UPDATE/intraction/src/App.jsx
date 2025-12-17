import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Intraction from './components/Intraction'
import Function_Process from './components/Function_Process'
import Container from './components/Container'

const App = () => {
  return (
    <>
    <header>
      <NavBar/>
    </header>

    <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/intract' element={<Intraction/>} />
        <Route path='/function' element={<Function_Process/>}/>
        <Route path='/container' element={<Container/>}/>
      </Routes>
    </main>
    
    </>
  )
}

export default App
