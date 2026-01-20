
import useEenNumbercheck from '../hooks/useEenNumbercheck'

const EvenNumberFinder = () => {

   const {formdata,handlechange,change} = useEenNumbercheck()

  return (
    <div>
      <form onSubmit={change}>
        <input type="number" placeholder='Enter the Number' onChange={handlechange} />
        <input type="submit" value={"Check"} />
      </form>

      <h1>{formdata}</h1>
    </div>
  )
}

export default EvenNumberFinder
