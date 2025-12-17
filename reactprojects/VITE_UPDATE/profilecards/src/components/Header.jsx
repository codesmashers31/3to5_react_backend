import React from 'react'

const Header = ({dashbardtitle}) => {
  return (
    <div>
      <header className='bg-amber-500 text-center p-2'>
           <h1>{dashbardtitle}</h1>
      </header>
    </div>
  )
}

export default Header
