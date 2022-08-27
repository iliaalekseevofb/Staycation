import React from 'react';
import { Link } from 'react-router-dom';
import dataDetails from '../../data/dataDetails.json';

const Title = ({id}) => {
  return (
    <div className='w-full px-5 sm:px-10 pt-5 sm:pt-10 2xl:pt-16 flex justify-center items-center'>
      <div className='w-full max-w-screen-xl lg:grid grid-cols-3 grid-rows-1 gap-6'>
        <div className='hidden lg:block'>
          <Link className='text-md text-neutral-400 hover:text-secondary duration-200' to='/'>Home</Link>
          <span className='mx-5 text-md text-neutral-400'>/</span>
          <Link className='text-md text-secondary' to={`/place${id}`}>Place Details</Link>
        </div>
        {dataDetails[0].places && dataDetails[0].places.map((item, index) => {
          return (item.id === parseInt(id) &&
            <div key={index} className='flex flex-col justify-center items-center'>
              <h1 className='mb-2 text-3xl xl:text-4xl text-secondary font-semibold'>{item.title}</h1>
              <h5 className='text-lg text-neutral-400 font-light'>{item.location}</h5>
            </div>
          )
        })}
        <div></div>
      </div>
    </div>
  )
}

export default Title