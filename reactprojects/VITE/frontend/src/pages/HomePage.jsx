import Button from '../components/Button'

const HomePage = ()=>{

    return (<>
    
  <div style={{backgroundColor:"black",color:"white",padding:"10px",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <h1 style={{fontSize:"40px"}}>This is React Compoenents Banner</h1>
    <div>
        <Button/>
    </div>
   </div>
  
    </>)

}

export default HomePage;