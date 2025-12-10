import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='bg-amber-200 p-5 h-100 flex justify-center items-center text-center'>
        <div>
            <h1 className='text-6xl mb-5'>Welcome to Indian Sports Site #No-1</h1>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Dolor, veritatis 
                est expedita nulla autem tempora cumque 
                esse unde quia ad. Quas dolorem possimus
                 asperiores consequatur totam suscipit 
                 iusto qui ipsum.</p>

                 <div>
                    <button className='bg-gray-700 w-40 text-white rounded-full p-1 hover:bg-white hover:text-black'>Explore More</button>
                 </div>
        </div>
    </div>
    </>
  )
}

export default Banner
