import  { useState } from 'react'

const Function_Process = () => {

    console.log('Compoenent rerender');
    

const [count,setCount] = useState(0)


const doubleTheNumber = ()=>{
   console.log('Function update');
   
    setCount(count+1)
}

  return (
    <>
    <div className='bg-amber-400 p-5 h-100 flex flex-col justify-center items-center text-2xl'>
        <div>
            <h1>State Function Process</h1>
            <h1 className='text-center p-4'>{count}</h1>
        </div>
        <div >
            <button onClick={doubleTheNumber} className='bg-white p-1 rounded text-center w-60'>Click Me</button>
        </div>
    </div>
    </>
  )
}

export default Function_Process
