import { useEffect, useState } from "react"
import { ThemeContext } from "./ThemeContext"


const ThemeProvider = ({children}) => {

 const [theme,setTheme] = useState(true)
 const [getdata,setGetData] = useState("")

 const themeChange = ()=>{
    
 
    
 localStorage.setItem("datatheme",theme)
  
setTheme(!theme)
 alert("Theme Succfully Change")
 
   
 }

 useEffect(()=>{
    
    const themedatas = ()=>{

        const themenewdata = localStorage.getItem("datatheme")

        setGetData(JSON.parse(themenewdata))

    console.log('new',getdata);
        

    }

    themedatas()

 },[getdata])


  return (
    <div>
      <ThemeContext.Provider value={{getdata,themeChange}}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider
