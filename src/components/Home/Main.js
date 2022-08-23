import React from 'react';
import { main, baggage, camera, location } from '../../assets';

const features = [
  [baggage, '80,409', 'travelers'],
  [camera, '862', 'treasure'],
  [location, '1,492', 'cities']
]

const Main = () => {
  return (
    <div id='home' className='w-full px-5 sm:px-10 mt-10 2xl:mt-16 flex justify-center items-center'>
      <div className='w-full px-4 lg:px-0 max-w-screen-2xl flex flex-col-reverse lg:flex-row justify-between items-center'>
        <div className='w-full mt-8 lg:mt-0 flex flex-col justify-center items-center lg:block lg:w-auto'>
          <h1 className='w-full lg:w-[560px] 2xl:w-[605px] mb-6 text-secondary text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl lg:leading-tight 2xl:leading-snug font-bold'>Forget Busy Work. Start Next Vacation</h1>
          <p className='w-full lg:w-[420px] pb-6 sm:pb-10 text-neutral-400 text-center lg:text-left text-xl lg:text-lg 2xl:text-xl font-light'>We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
          <button className='w-[220px] lg:w-[180px] 2xl:w-[220px] h-[60px] lg:h-[50px] 2xl:h-[60px] mb-8 sm:mb-16 lg:mb-20 bg-primary shadow-buttonShadow rounded-md text-xl lg:text-lg 2xl:text-xl text-white hover:brightness-90 duration-200'>
            <a href='#categories' className='w-full h-full'>Show Me Now</a>
          </button>
          <div className='md:w-full lg:w-[440px] 2xl:w-[480px] hidden md:flex justify-between items-center'>
            {features.map((item, index) => (
              <div key={index} className='flex lg:block'>
                <img src={item[0]} alt='...' className='w-12 lg:w-8 h-12 lg:h-8 mr-3 lg:mr-0'/>
                <div className='lg:pt-1 flex justify-between items-center'>
                  <p className='pr-1 text-2xl lg:text-xl text-secondary font-medium'>{item[1]}</p>
                  <p className='text-xl lg:text-lg text-neutral-400 font-light'>{item[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='relative w-full lg:w-[720px] h-[320px] sm:h-[400px] md:h-[560px] 2xl:w-[640px] 2xl:h-[500px] mt-8 ml-6 lg:ml-0'>
          <img className='absolute z-20 w-full h-full object-cover rounded-[20px] rounded-tl-[120px] -top-6 2xl:-top-10 -left-6 2xl:-left-10' src={main} alt='main' />
          <div className='absolute z-10 w-full h-full border-4 border-neutral-200 rounded-[15px] rounded-tl-[120px]'></div>
        </div>
      </div>
    </div>
  )
}

export default Main