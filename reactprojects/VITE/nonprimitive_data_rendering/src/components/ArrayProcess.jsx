
const ArrayProcess = () => {

 const skills = ["HTML","CSS","REACT","SQL","MONGODB","JAVA","PYTHON","NODE"]


  return (
    <>
    <div>
      <h2>Array Rendering</h2>
      <h1>{skills[0][0]}|{skills[0]} </h1>
    </div>

    <div style={{background:"lightgray",padding:"30px"}}>
     
     {skills.map((e,i)=>(
        <p key={i}>{i+1}.{e}</p>


     ))}

       
        
    </div>
    
    
    </>




  )
}

export default ArrayProcess
