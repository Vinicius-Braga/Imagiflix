import React from 'react';
import placeholder from '../assets/Hero.jpg'

const Hero = () => (
   <header className='min-h-screen'>
      <img className='object-cover object-center h-full w-full' 
      src={placeholder} 
      alt='File em destaque'/>
   </header>
);

export default Hero;