import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-600 text-white p-5'>
      <div>
        logo
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar
