

const App = () => {


  const project_Title= "HR PROCESS";
  const company_name = "ZOHO"
  const location = "Chennai" 


  const year = null

  const isActive = true;


  const valueTrue = false

  return (
    <>
    My Project name is {project_Title} This is Very Effecttive so we will doing this 
    project By {company_name} location:{location}, Year - {year}


    <h1>
        My Project name is {project_Title} This is Very Effecttive so we will doing this 
    project By {company_name} location:{location} ,Year - {year}
    </h1>


    <p>  My Project name is {project_Title} This is Very Effecttive so we will doing this 
    project By {company_name} location:{location}, Year - {year}</p>


    
      {isActive==true?<h1>{project_Title}</h1>:<h1>{location}</h1>}


       {/* {valueTrue?<button style={{background:"green",color:"white",width:"50px"}}>True</button>:<button style={{background:"Red",color:"white",width:"50px"}}>False</button>} */}
   


  
       
     {valueTrue&&<div style={{background:"black",color:"white",width:"50px",height:"50px"}}>
    Box
   </div>}


   {year??"This is Nullesh"}
  {





  }
        
    </>



  )
}

export default App
