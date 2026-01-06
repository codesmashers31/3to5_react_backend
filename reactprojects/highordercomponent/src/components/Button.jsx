import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


const Button = ({text}) => {

  const {theme,changecolor} = useContext(ThemeContext)
  
  return (

    
    <div>
      {theme?"Light":"Dark"}
      <button onClick={changecolor}  style={{backgroundColor:"gray",color:"white",padding:"2px",border:"none",borderRadius:"6px"}} >{text}</button>
    </div>
  )
}

export default Button
