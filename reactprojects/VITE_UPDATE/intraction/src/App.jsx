// 

import { useState } from "react";

const App = ()=>{
console.log('compoenent running');


 const [count,SetCount] = useState(0)
  

  const countup = ()=>{

     SetCount(count+1)
   

  }

  return (
    <>
    <div className="p-5">
      <h1>Variable</h1>
      <h1>{count}</h1>
        <button onClick={countup}>Click me</button>
    </div>
    </>
  )

}

export default App;