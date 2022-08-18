import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';

const Navbar = () => {
  return (
    <div className='w-full h-20 px-5 flex justify-center items-center border-b border-neutral-200'>
      <div className='w-full max-w-screen-2xl flex justify-between items-center'>
        <Link to='/'><img src={logo} alt='logo' /></Link>
        <div className='w-[480px] flex justify-between items-center text-lg'>
          <a href='#home' className='hover:text-main duration-200'>Home</a>
          <a href='#categories' className='hover:text-main duration-200'>Categories</a>
          <a href='#testimonials' className='hover:text-main duration-200'>Testimonials</a>
          <a href='#agents' className='hover:text-main duration-200'>Agents</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar