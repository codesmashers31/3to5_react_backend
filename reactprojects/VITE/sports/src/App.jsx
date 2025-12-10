import Banner from "./components/Banner";
import Cards from "./components/Cards";


const App = ()=>{
const navlines = [{link:"Home"},{link:"About"},{link:"Contact"},{link:"Help"}]
const images = "Sports"
return (<>

<header>
<div className="bg-gray-800 text-white flex justify-between items-center p-4">
  <div className="text-2xl">
     {images}
  </div>
  <div className="flex items-center gap-5">
      {navlines.map((al,index)=>(
        <a href={al.link} key={index+1} className="hover:bg-white p-1 rounded-2xl hover:text-black text-white w-30 text-center">{al.link}</a>
      ))}
  </div>
</div>

</header>



<main>
  <Banner/>
</main>
 


 <section>
  <Cards/>
 </section>

</>)

}

export default App;