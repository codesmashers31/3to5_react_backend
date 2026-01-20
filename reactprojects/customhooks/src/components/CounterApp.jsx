import useCounterApp from "../hooks/useCounterApp"

const CounterApp = () => {

    console.log(useCounterApp());
    

    const {counter,increment,decrement,reset} = useCounterApp()

  return (
   <>
   <div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>

    <h1>{counter}</h1>
   </div>
   </>
  )
}

export default CounterApp
