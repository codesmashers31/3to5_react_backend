
import cricket from '../assets/img/4.jpg'
import foodball from '../assets/img/5.jpg'
import Kabaddi from '../assets/img/6.jpg'
const Cards = () => {
 
  const cards = [
    {id:1,img:cricket,sportsName:"Cricket",ground:"Chepeck"},
    {id:2,img:foodball,sportsName:"FoodBall",ground:"Banglore"},
    {id:3,img:Kabaddi,sportsName:"Kabaddi",ground:"Madurai"}
  ]  


  return (
   <>
    <div className="bg-gray-300 h-100 p-5 flex justify-around items-center">
     
     {cards.map((e)=>(

        <div className="bg-white w-60 h-75 text-black rounded p-5 flex flex-col gap-3" key={e.id}>
         <img src={e.img} alt={e.img}  className='rounded' />
         <h2>{e.sportsName}</h2>
         <p>{e.ground}</p>
         <div>
            <button className="bg-black p-1 text-white rounded w-25 font-extrabold font-serif">Book Now</button>
         </div>
      </div>



     ))}


      
    </div>
   </>
  )
}

export default Cards
