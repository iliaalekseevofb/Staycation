import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';

const footerContent = [
  ['For Beginners', ['New Account', 'Start Booking a Room', 'Use Payments']],
  ['Explore Us', ['Our Careers', 'Privacy', 'Terms & Conditions']],
  ['Connect Us', ['support@staycation.id', '021 - 2208 - 1996', 'Staycation, Kemang, Jakarta']]
]

const Footer = () => {
  return (
    <div id='agents' className='w-full px-5 sm:px-10 py-16 flex justify-center items-center border-t border-neutral-200'>
      <div className='w-full max-w-screen-2xl flex flex-col justify-between items-center'>
        <div className='w-full grid grid-cols-4 grid-rows-1 gap-16 mb-16'>
          <div>
            <Link to='/'><img src={logo} alt='logo' /></Link>
            <h5 className='text-neutral-300 text-xl font-light mt-2'>We kaboom your beauty holiday instantly and memorable.</h5>
          </div>
          {footerContent.map((item, index) => (
            <div key={index}>
              <h3 className='text-2xl font-medium text-secondary mb-4'>{item[0]}</h3>
              <div>
                {item[1].map((innerItem, innerIndex) => (
                  <h5 className='text-xl text-neutral-300 font-light my-3 cursor-pointer' key={innerIndex}>{innerItem}</h5>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h5 className='text-lg text-neutral-300 font-light'>Copyright 2019 • All rights reserved • Staycation</h5>
      </div>
    </div>
  )
}

export default Footer