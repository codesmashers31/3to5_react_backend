
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
 <>
 <div className='bg-gray-800 text-white p-5 flex justify-between items-center'> 
    <div className='bg-amber-400 p-2 rounded-full text-black font-extrabold'>
       LOGO
    </div>
    <div className='flex gap-5 items-center'>
      <Link to='/' className='bg-amber-400 p-1 rounded w-20 text-center text-black font-bold'>Home</Link>
      <Link to='/intract' className='bg-amber-400 p-1 rounded w-25 text-center text-black font-bold'>Intraction</Link>
    </div>
 </div>
 
 </>
  )
}

export default NavBar
