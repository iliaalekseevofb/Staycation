import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { BsCalendarWeek } from 'react-icons/bs';
import dataDetails from '../../data/dataDetails.json';

const Booking = ({id}) => {
  const [nights, setNights] = useState(1);

  const increaseNights = () => {
    setNights(nights + 1);
  }

  const decreaseNights = () => {
    if (nights !== 1) {
      setNights(nights - 1)
    }
  }

  return (
    <div className='w-full h-full lg:col-span-2 p-6 sm:p-10 border-2 border-neutral-300 rounded-xl'>
      {dataDetails[0].places && dataDetails[0].places.map((item, index) => {
        return (item.id === parseInt(id) &&
        <div key={index} className='w-full h-full'>
          <h3 className='text-xl text-secondary font-medium'>Start Booking</h3>
          <div className='my-4'>
            <span className='text-4xl sm:text-5xl font-medium text-emerald-400'>$</span>
            <span className='text-4xl sm:text-5xl font-medium text-emerald-400'>{item.price}</span>
            <span className='ml-2 text-4xl font-light text-neutral-300'>per night</span>
          </div>
          <div className='mb-4'>
            <h5 className='mb-2 text-lg text-secondary font-medium'>How long will you stay?</h5>
            <div className='w-full h-16 bg-neutral-100 rounded-md flex justify-between items-center'>
              <button onClick={decreaseNights} className='w-16 h-full flex justify-center items-center bg-emerald-400 rounded-md hover:brightness-90 duration-200'>
                <FaMinus className='text-white' size={28} />
              </button>
              <div>
                <span className='text-xl xl:text-2xl text-secondary font-medium mr-2'>{nights}</span>
                <span className='text-xl xl:text-2xl text-secondary font-light'>nights</span>
              </div>
              <button onClick={increaseNights} className='w-16 h-full flex justify-center items-center bg-red-500 rounded-md hover:brightness-90 duration-200'>
                <FaPlus className='text-white' size={28} />
              </button>
            </div>
          </div>
          <div className='mb-4'>
            <h5 className='mb-2 text-lg text-secondary font-medium'>Pick a date</h5>
            <div className='w-full h-16 rounded-md flex justify-start items-center bg-neutral-100'>
              <button className='w-16 mr-6 xl:mr-8 h-full flex justify-center items-center bg-secondary rounded-md hover:brightness-90 duration-200'>
                <BsCalendarWeek className='text-white' size={32}/>
              </button>
              <div>
                <h5 className='text-xl xl:text-2xl text-secondary font-medium'>20 Jan - 22 Jan</h5>
              </div>
            </div>
          </div>
          <div className='mb-8 text-xl'>
            <span className='mr-1 text-neutral-400'>You will pay</span>
            <span className='font-medium text-secondary'>$</span>
            <span className='font-medium text-secondary'>{item.price * nights}</span>
            <span className='ml-1 font-medium text-secondary'>USD</span>
          </div>
          <button className='w-full h-16 bg-primary shadow-buttonShadow rounded-md text-xl lg:text-lg 2xl:text-xl text-white hover:brightness-90 duration-200'>
            Continue to book
          </button>
        </div>
        )
      })}
      
    </div>
  )
}

export default Booking