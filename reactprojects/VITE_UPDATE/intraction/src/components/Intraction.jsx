import React from 'react'

const Intraction = () => {

let count = 0

const clickData = ()=>{

     count++
   

    console.log(count);
    

}

const valueSubmit = (s)=>{
    
    // event Object
    console.log('Event Object',s.target[0].value);
    
    s.preventDefault()
let a = 2;

let datas = Number(s.target[0].value)  + a 

alert(datas)
}
 


const dataget = ()=>{

// let a = 2;

// let datas = Number(e.target.value)  + a 

// alert(datas)

}








  return (
    <>
  <div  className='bg-amber-600  h-100 flex flex-col justify-center items-center gap-5'   >
        <div className='text-white font-extrabold text-5xl'>
           Intaction Process - Onclick - {count}
        </div>
        <h1 >Count</h1>
        <div>
            <button onClick={clickData} className='bg-white p-1 rounded w-20 font-bold'>Click Me</button>
        </div>
    </div>



<section className='mt-5'>
  <div  className='bg-black  h-100 flex flex-col justify-center items-center gap-5'   >
        <div className='text-white font-extrabold text-5xl'>
           onSubmit
        </div>

        <form onSubmit={valueSubmit}>
            <input type="text" name='username' onChange={dataget}  placeholder='Enter the name' className='bg-white p-1 w-50 h-10 rounded' /> 
            <input  type="submit" value='Register' className='bg-white p-1 ml-4 w-30 rounded h-10' />
        </form>
    </div>
<div className='bg-green-600 p-10 flex justify-center'>
 <button onClick={valueSubmit} className='bg-white p-1 w-50 rounded h-10'>Click Me first i am button</button>
</div>
   
</section>



    
    </>
  )
}

export default Intraction
