
import Button from './components/Button'
import withAlter from './hoc/withAlert'


const AlterButton = withAlter(Button)


const App = () => {




  return (
   <>
   <Button text={"Normal Button"}  />

   <AlterButton text={"HOC Button"} />

   
   </>
  )
}

export default App
