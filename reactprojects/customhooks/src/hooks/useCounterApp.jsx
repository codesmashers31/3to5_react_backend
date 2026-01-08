import { useState } from "react"


const useCounterApp = (initvalue=0) => {

const [counter,setCounter] = useState(initvalue)


const increment = () => setCounter(counter+1)
const decrement = () => setCounter(counter-1)
const reset     = () => setCounter(initvalue)
 
return {
//   increment:increment
    increment,  
    decrement,
    reset,
    counter

}

}

export default useCounterApp
