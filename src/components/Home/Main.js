import React from 'react';
import dataHome from '../../data/dataHome.json';

const Main = () => {
  return (
    <div id='home' className='w-full px-5 sm:px-10 mt-10 2xl:mt-16 flex justify-center items-center'>
      <div className='w-full px-4 lg:px-0 max-w-screen-xl flex flex-col-reverse lg:flex-row justify-between items-center'>
        <div className='w-full lg:w-auto mt-8 lg:mt-0 lg:block flex flex-col justify-center items-center'>
          <h1 className='w-full lg:w-[560px] 2xl:w-[540px] mb-6 text-secondary text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl lg:leading-tight 2xl:leading-snug font-bold'>Forget Busy Work. Start Next Vacation</h1>
          <p className='w-full lg:w-[420px] pb-6 sm:pb-10 text-neutral-400 text-center lg:text-left text-xl lg:text-lg font-light'>We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
          <div className='mt-2 mb-8 sm:mb-16 lg:mb-20'>
            <a href='#categories' className='w-full h-full px-8 py-4 bg-primary shadow-buttonShadow rounded-md text-xl lg:text-lg text-white hover:brightness-90 duration-200'>Show Me Now</a>
          </div>
          <div className='md:w-full lg:w-[440px] 2xl:w-[480px] hidden md:flex justify-between items-center'>
            {dataHome[0].icons && dataHome[0].icons.map((item, index) => (
              <div key={index} className='flex lg:block'>
                <img src={item.icon} alt='...' className='w-10 lg:w-8 h-10 lg:h-8 mr-3 lg:mr-0'/>
                <div className='lg:pt-1 flex justify-between items-center'>
                  <p className='pr-1 text-lg text-secondary font-medium'>{item.count}</p>
                  <p className='text-lg text-neutral-400 font-light'>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='relative w-full lg:w-[640px] h-[320px] sm:h-[400px] md:h-[500px] mt-8 ml-6 lg:ml-0'>
          <img className='absolute z-20 w-full h-full object-cover rounded-[20px] rounded-tl-[120px] -top-6 2xl:-top-10 -left-6 2xl:-left-10' src={dataHome[0].img && dataHome[0].img} alt='main' />
          <div className='absolute z-10 w-full h-full border-4 border-neutral-200 rounded-[15px] rounded-tl-[120px]'></div>
        </div>
      </div>
    </div>
  )
}

export default Main