

const ArrayOfObjectsProcess = () => {

    const obj =[{id:1,name:"React++",year:"2024"},{id:2,name:"Node",year:"2015"},{id:3,name:"HTML",year:"1996"},{id:4,name:"React--",year:"2000"}] 
  return (

    <>
    <div style={{backgroundColor:"black",color:"white",padding:"20px",display:"flex",justifyContent:"space-around"}}>

      {obj.map((e,i)=>(

          <div style={{background:"white",color:"black",width:"120px",
          height:"100px",padding:"10px",borderRadius:"8px"}} key={i}>
            <h1>{e.id}.{e.name}</h1>
            <h2>{e.year}</h2>
            <button>Pay Now</button>
        </div>

      ))}



      

{/* 
        <div style={{background:"white",color:"black",width:"120px",height:"100px",padding:"10px",borderRadius:"8px"}}>
            <h1>{obj[1].name}</h1>
            <h2>{obj[1].year}</h2>
            <button>Pay Now</button>
        </div>


        <div style={{background:"white",color:"black",width:"120px",height:"100px",padding:"10px",borderRadius:"8px"}}>
            <h1>{obj[2].name}</h1>
            <h2>{obj[2].year}</h2>
            <button>Pay Now</button>
        </div> */}
      
    </div>
    </>
  )
}

export default ArrayOfObjectsProcess




