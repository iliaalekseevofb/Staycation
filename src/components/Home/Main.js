import React from 'react';
import { main } from '../../assets';

const Main = () => {
  return (
    <div className='w-full px-5 flex justify-center items-center'>
      <div className='w-full max-w-screen-2xl flex justify-between items-center'>
        <div>
          <h1 className='w-[605px] text-secondary text-6xl leading-snug font-bold pb-6'>Forget Busy Work,<br />Start Next Vacation</h1>
          <p className='w-[420px] text-neutral-300 text-xl font-light pb-10'>We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
          <button className='w-[220px] h-[60px] bg-primary shadow-buttonShadow rounded-md text-xl text-white hover:brightness-90 duration-200'>Show Me Now</button>
          <div>{/* Features */}</div>
        </div>
        <div className=''>
          <img src={main} alt='main' />
        </div>
      </div>
    </div>
  )
}

export default Main