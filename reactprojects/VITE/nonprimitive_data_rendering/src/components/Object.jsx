import React from 'react'

const Object = () => {


  const obj = {name:"React",year:"2024"}

  const title = "This process is Object Rendering"
 

  const obj_nested = {project:"React",course:{coursename:{Java:{},Python:"Pythonmern"},CourseFees:30000}}

  console.log(obj_nested)

  return (
    <div>
        <h1>{title}</h1>
      <h1>{obj.name}</h1>
      <h1>{obj_nested.course.coursename.Python}</h1>
    </div>
  )
}

export default Object





// make a nested object 
// inside the main object
// to print in the screen   For Movie Name




