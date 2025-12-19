
// import { useLocation,  } from "react-router-dom"

import { useLocation } from "react-router-dom"

// const Productdetails = () => {
//     //    const [products] = useState([{
//     //         id:1,name:"react",subject:"Node",details:"React Process"
//     //     },{
//     //         id:2,name:"JS",subject:"JS",details:"JS Process"
//     //     },{
//     //         id:3,name:"HTML",subject:"HTML",details:"HTML Process"
//     //     }])

   
//         // const {id} = useParams();

//         const location = useLocation()

//         console.log(location);
        

//         const productsdata = location.state.datas

//         console.log(productsdata);
       

//         // alert(id)

//         //const product = products.find((items)=>items.id === Number(id))

       
       


//   return (
//     <>
//     <div className="bg-gray-600 text-white p-10 h-100">

//         {productsdata.map((e)=>(
//             <h1>{e.name}</h1>  
//         ))}
           
//     </div>
//     </>
//   )
// }

// export default Productdetails





const Productdetails = () => {
 
    const location = useLocation()

    const datashow = location.state.data;


  return (
    <div>
      {datashow}
    </div>
  )
}

export default Productdetails
