import React from 'react';
import { main, baggage, camera, location } from '../../assets';

const features = [
  [baggage, '80,409', 'travelers'],
  [camera, '862', 'treasure'],
  [location, '1,492', 'cities']
]

const Main = () => {
  return (
    <div className='w-full px-5 flex justify-center items-center mt-16'>
      <div className='w-full max-w-screen-2xl flex justify-between items-center'>
        <div>
          <h1 className='w-[605px] text-secondary text-6xl leading-snug font-bold pb-6'>Forget Busy Work,<br />Start Next Vacation</h1>
          <p className='w-[420px] text-neutral-400 text-xl font-light pb-10'>We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
          <button className='w-[220px] h-[60px] bg-primary shadow-buttonShadow rounded-md text-xl text-white hover:brightness-90 duration-200 mb-28'>Show Me Now</button>
          <div className='w-[480px] flex justify-between items-center'>
            {features.map((item, index) => (
              <div key={index}>
                <img src={item[0]} alt='' />
                <div className='flex justify-between items-center pt-1'>
                  <p className='text-lg text-secondary font-medium pr-1'>{item[1]}</p>
                  <p className='text-md text-neutral-400 font-light'>{item[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='relative w-[680px] h-[520px] mb-12'>
          <img className='absolute z-20 w-full h-full object-cover rounded-[20px] rounded-tl-[120px]' src={main} alt='main' />
          <div className='absolute z-10 w-[680px] h-[520px] border-2 border-neutral-200 rounded-[15px] rounded-tl-[120px] top-12 left-12'></div>
        </div>
      </div>
    </div>
  )
}

export default Main