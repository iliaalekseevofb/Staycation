import React from 'react';
import { Link } from 'react-router-dom';
import dataHome from '../../data/dataHome.json';

const MostPicked = () => {
  return (
    <div className='w-full px-5 sm:px-10 pt-10 2xl:pt-16 flex justify-center items-center'>
      <div className='w-full max-w-screen-xl'>
        <h3 className='mb-5 text-secondary text-2xl font-medium'>Most Picked</h3>
        <div className='grid grid-rows-5 sm:grid-rows-3 lg:grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {dataHome[1].cards && dataHome[1].cards.map((item, index) => (
            <div key={index} className={`relative max-h-72 lg:max-h-full ${index === 0 ? 'col-span-1 sm:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2 rounded-xl overflow-hidden' : 'col-span-1 lg:row-span-1 rounded-xl overflow-hidden'}`}>
              <Link to={`/place${item.id.toString()}`}>
                <img src={item.img} className='relative z-20 w-full h-full object-cover rounded-xl brightness-90 transition ease-in-out duration-500 hover:scale-125' alt='...' />
                <div className='absolute z-30 min-w-[180px] w-1/2 h-12 top-0 right-0 flex justify-center items-center rounded-tr-xl rounded-bl-xl bg-thirdly text-white text-md'>
                  <span>$</span>
                  <p className='pr-1'>{item.price}</p>
                  <span>per night</span>
                </div>
                <div className='absolute z-30 bottom-6 left-6'>
                  <h3 className='text-xl text-white'>{item.title}</h3>
                  <h5 className='text-md font-light text-neutral-200'>{item.location}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MostPicked