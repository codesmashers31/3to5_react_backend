import  { useState } from 'react'
import ProfileCards from './ProfileCards'

const ProfileList = () => {

const [userProfile] = useState([{
   
    id:1,name:"React",role:"Admin"

},{
   
    id:2,name:"Node",role:"Frontend developer"

},{
   
    id:3,name:"JS",role:"Developer"

}])


  return (
    <div>
      <ProfileCards  profile={userProfile}  />
    </div>
  )
}

export default ProfileList
