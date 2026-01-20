import React from 'react'
import useFetchData from '../hooks/useFetchData'

const ShowDatas = () => {

const {data,loading,error} = useFetchData("https://dummyjson.com/users")

console.log('ghfgh',data);



if(loading){

    return <h1>Loading</h1>
}

if (error) {
    return <h1>Error Happen</h1>
}


  return (
       

    <>
    
    <div>
    {data.users.map((e)=>(
        <p key={e.id}>{e.username}</p>
    ))}
    </div>
    
    </>



  )
}

export default ShowDatas
