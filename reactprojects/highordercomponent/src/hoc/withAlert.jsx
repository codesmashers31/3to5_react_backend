const withAlter = (Newdata)=> (props) =>{
  console.log(Newdata);


  return <Newdata {...props}   />
  
} 

export default withAlter;