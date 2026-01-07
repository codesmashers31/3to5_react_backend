import React, {  useCallback, useState } from 'react'
import ListItems from './components/ListItems';

const App = () => {
const [number,setNumber] = useState(0);
const [theme,setTheme] = useState(false)


const takeTheValue = (e)=>{

 setNumber(Number(e.target.value))

}


const changetheme = ()=>{
  setTheme(!theme)
}


const getItems = useCallback((numberew)=>{
   return [number+numberew+1,number+numberew+2,number+numberew+3]
},[number])


const themeStyle = {
  backgroundColor: theme?"black":"white",
  color: theme?"white":"black"
}


  return (
     <>
    <div style={themeStyle}>Memo</div>
    <input onChange={takeTheValue} placeholder="Enter the number" type="number" />
    <div>
      <button onClick={changetheme}>Theme Change</button>
    </div>

    <div>
    <ListItems   getItem={getItems} />
    </div>
     </>
  )
}

export default App



