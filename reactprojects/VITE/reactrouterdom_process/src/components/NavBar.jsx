
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-blue-600 text-white  p-2 flex justify-between items-center'>
      <div>
        Logo
      </div>
      <div className='flex gap-10 p-2'>
        <Link to="/">Home</Link>
        <Link to="/aboutpage">About</Link>
        <Link to="/contectpage">Contect</Link>
      </div>
    </div>
  )
}

export default NavBar
