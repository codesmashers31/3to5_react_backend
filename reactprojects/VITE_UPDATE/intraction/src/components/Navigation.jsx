import { useNavigate } from "react-router-dom"


const Navigation = () => {

    const navigate = useNavigate()

  const login = ()=>{

     
   navigate("/")

  }


  return (
    <>
    <div className='bg-amber-400 p-5'>
        <button onClick={login} className='bg-black text-white p-1 border-0 rounded'>Navigation</button>
    </div>
    </>
  )
}

export default Navigation
