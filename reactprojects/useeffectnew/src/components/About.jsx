import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
    console.log('i am about');
    
  return (
    <div>
      About
      <Link to="/">Home</Link>
    </div>

  )
}

export default About
