import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [timeon,SetTimenewdata] = useState(0)

   
    const timer_show = ()=>{
          //  console.log('this is');
           
        


        setInterval(()=>{
          //  console.log('this is running');
          SetTimenewdata((prev) => {

            if(prev<10){
             SetTimenewdata( prev+1)
            }else{
              SetTimenewdata(0)
            }

          })

         },1000)

     
          // console.log('datas',showdata);
          
         

      //  return ()=> clearInterval(showtime)

           

    }


     

  
    useEffect(()=>{
      // console.log('this i effect ');
         timer_show()

        


    },[])


  return (
    <div className='bg-gray-600 text-white p-5 h-100'>
      <h1>
         {timeon}
      </h1>
    </div>
  )
}

export default Timer
