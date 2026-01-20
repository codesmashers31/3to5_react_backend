import { useState } from "react"


const HideandShow = () => {
    const [hideshow,setHideShow] = useState(true)

const hideshowing = ()=>{

    setHideShow(!hideshow)

}
  return (
      <>
     <div className='p-10 h-100 flex flex-col gap-8 justify-center items-center bg-yellow-600'>
  
 <div className={hideshow?"bg-green-400 text-black p-5 h-50 w-50":"bg-red-400 text-white p-5 h-50 w-50"}>
        {hideshow?"Green bOx":"Red Box"}
    </div>


 
    <button onClick={hideshowing} className={hideshow?"bg-white w-30 rounded h-8 p-1":"bg-black text-white w-30 rounded h-8 p-1"}>{hideshow?"Hide":"Show"}</button>
     </div>
  
    
    </>
  )
}

export default HideandShow
