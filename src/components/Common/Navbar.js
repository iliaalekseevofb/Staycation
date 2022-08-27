import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import dataCommon from '../../data/dataCommon.json';

const navbarContent = [
  ['Categories', '#categories'],
  ['Testimonials', '#testimonials'],
  ['Agents', '#agents']
]

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    let menuHandler = (e) => {
      if (!menuRef.current.contains(e.target))
      setToggleMenu(false);
    };
    document.addEventListener('mousedown', menuHandler)
  });

  return (
    <div className='w-full h-20 px-5 sm:px-10 flex justify-center items-center border-b border-neutral-200'>
      <div className='w-full max-w-screen-xl flex justify-between items-center'>
        <Link to='/'><img src={dataCommon[0].icon} alt='logo' /></Link>
        <div className='w-[440px] hidden md:flex justify-between items-center'>
          <Link to='/' className='text-secondary hover:text-primary duration-200'>Home</Link>
          {navbarContent.map((item, index) => (
            <a key={index} href={item[1]} className='text-secondary hover:text-primary duration-200'>{item[0]}</a>
          ))}
        </div>
        <div className='block md:hidden' ref={menuRef}>
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            <FiMenu className='text-secondary hover:text-primary duration-200' size={32} />
          </button>
          <div className={`absolute z-30 ${toggleMenu ? 'block' : 'hidden'} top-20 left-0 right-0 flex flex-col justify-center items-start bg-neutral-100`}>
            <Link onClick={() => setToggleMenu(false)} to='/' className='w-full px-5 py-3 text-lg text-secondary hover:text-primary duration-200 border-b border-neutral-200'>Home</Link>
            {navbarContent.map((item, index) => (
              <a key={index} onClick={() => setToggleMenu(false)} href={item[1]} className='w-full px-5 py-3 text-lg text-secondary hover:text-primary duration-200 border-b border-neutral-200'>{item[0]}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar