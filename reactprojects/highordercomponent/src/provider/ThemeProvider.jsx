import { Children, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"


const ThemeProvider = ({children}) => {

const [theme,setTheme]=useState(true)

const changecolor=()=>{
    setTheme(!theme)
}


  return (
    <>
    <ThemeContext.Provider value={{theme,changecolor}}>
         {children}
    </ThemeContext.Provider>
    
    </>
  )
}

export default ThemeProvider
