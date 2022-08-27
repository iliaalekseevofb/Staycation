import React from 'react';
import { Link } from 'react-router-dom';
import dataCommon from '../../data/dataCommon.json';

const footerContent = [
  ['For Beginners', ['New Account', 'Start Booking a Room', 'Use Payments']],
  ['Explore Us', ['Our Careers', 'Privacy', 'Terms & Conditions']],
  ['Connect Us', ['support@staycation', '021 - 2208 - 1996', 'Staycation, Kemang, Jakarta']]
]

const Footer = () => {
  return (
    <div id='agents' className='w-full px-5 sm:px-10 py-8 sm:py-16 flex justify-center items-center border-t border-neutral-200'>
      <div className='w-full max-w-screen-xl flex flex-col justify-between items-center'>
        <div className='w-full sm:grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-16 mb-8 sm:mb-16'>
          <div className='mb-8 sm:mb-0'>
            <Link to='/'><img src={dataCommon[0].icon} alt='logo' /></Link>
            <h5 className='text-neutral-300 text-lg font-light mt-2'>{dataCommon[0].description}</h5>
          </div>
          {footerContent.map((item, index) => (
            <div key={index} className='mb-8 sm:mb-0'>
              <h3 className='text-xl font-medium text-secondary mb-4'>{item[0]}</h3>
              <div>
                {item[1].map((innerItem, innerIndex) => (
                  <h5 className='text-lg text-neutral-300 font-light my-3 cursor-pointer' key={innerIndex}>{innerItem}</h5>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h5 className='text-center text-md text-neutral-300 font-light'>Copyright 2019 • All rights reserved • Staycation</h5>
      </div>
    </div>
  )
}

export default Footer