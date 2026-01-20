import  { useState } from 'react'
import Header from './components/Header';
import ProfileList from './components/ProfileList';
import Fooder from './components/Fooder';

const App = () => {
  
  const [title] = useState("Profile For DashBoard");

  const foot = " 2025 @ All rights reserved"

  return (
  <>
  <div>
    <Header dashbardtitle={title}  />
    <ProfileList/>
    <Fooder datasfoot = {foot}/>
  </div>
  
  </>
  )
}

export default App
