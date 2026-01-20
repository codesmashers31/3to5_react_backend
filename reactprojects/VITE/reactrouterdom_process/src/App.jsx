
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContectPage from './pages/Contect'
import MainApp from './components/MainApp'

const App = () => {
  return (
    <>
    
    <main>
     <Routes>
        
        <Route element={<MainApp/>}>
          
          <Route path='/' element={<HomePage/>} />
        </Route>
       <Route path='/contectpage' element={<ContectPage/>} />
        
     </Routes>
    </main>

    <footer>
      <div className='bg-black mt-90 text-center text-white  b-0 p-5'>2025@cc</div>
    </footer>
    
    </>
  )
}

export default App
