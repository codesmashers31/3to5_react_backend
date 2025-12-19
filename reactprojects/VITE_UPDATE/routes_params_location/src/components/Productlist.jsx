// import  { useState } from 'react'
// import { Link } from 'react-router-dom'

import { Link } from "react-router-dom"

// const Productlist = () => {
  
//     const [products] = useState([{
//         id:1,name:"react",subject:"Node",details:"React Process"
//     },{
//         id:2,name:"JS",subject:"JS",details:"JS Process"
//     },{
//         id:3,name:"HTML",subject:"HTML",details:"HTML Process"
//     }])


//   return (
//     <>
//     <div className='bg-gray-600 text-white p-10 h-100 flex gap-5'>
//         {products.map((e)=>(

//             <div className='bg-white rounded p-5 h-50 w-50 text-black' key={e.id}>
//            <h1>{e.name}</h1>
//            <p>{e.details}</p>
//            <Link to={`/product/${e.id}`}  className='bg-black text-white p-1 rounded'>Read More</Link>
//        </div>

//         ))}
       
//     </div>

//  <div className='bg-gray-600 text-white p-10 h-100 flex gap-5'>
//         {products.map((e)=>(

//             <div className='bg-white rounded p-5 h-50 w-50 text-black' key={e.id}>
//            <h1>{e.name}</h1>
//            <p>{e.details}</p>
//            <Link to='/cards' state={{productsdata:e}}  className='bg-black text-white p-1 rounded'>Read More</Link>
//        </div>

//         ))}
       
//     </div>
//     <div>
//         <Link className='bg-black text-white p-1 rounded' to='/product' state = {{datas:products}}>Datas</Link>
//     </div>



//     </>
//   )
// }

// export default Productlist







const productlist = () => {
  return (
    <div>
      <Link to="/product" state={{data:1,newdatas:2}}>Move to Product list </Link>
    </div>
  )
}

export default productlist
