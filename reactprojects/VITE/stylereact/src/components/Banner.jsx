import banner from '../assets/images/300-1.png'

const Banner = () => {
  return (
    <>
    <div className='banner'>
        <div className='child'>
           <h1>Welcome To React APP</h1>
           <img src={banner} alt="" />
        </div>
    </div>
    
    </>
  )
}

export default Banner
