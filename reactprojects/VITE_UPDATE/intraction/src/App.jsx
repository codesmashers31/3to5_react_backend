import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Intraction from './components/Intraction'

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
      </Routes>
    </main>
    
    </>
  )
}

export default App
