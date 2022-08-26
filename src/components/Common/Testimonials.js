import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import dataDetails from '../../data/dataDetails.json';

const Testimonials = ({id}) => {
  return (
    <div id='testimonials' className='w-full px-5 sm:px-10 pt-16 2xl:pt-24 mb-16 md:mb-32 flex justify-center items-center'>
      <div className='w-full max-w-screen-2xl'>
        {dataDetails[0].places && dataDetails[0].places.map((item, index) => {
          return (item.id === parseInt(id) &&
            <div key={index} className='w-full h-full px-4 md:px-0 flex flex-col md:flex-row justify-start items-center'>
              <div className='relative w-full lg:w-[500px] 2xl:w-[500px] h-[320px] sm:h-[440px] lg:h-[540px] xl:h-[640px] mr-6 md:mr-0'>
                <img className='absolute z-20 w-full h-full object-cover rounded-[20px] rounded-br-[120px] top-6 2xl:top-10 left-6 2xl:left-10' src={item.testimonial.img} alt={item.testimonial.author} />
                <div className='absolute z-10 w-full h-full border-4 border-neutral-200 rounded-[15px] rounded-br-[120px]'></div>
              </div>
              <div className='flex flex-col justify-center items-start pl-0 md:pl-16 lg:pl-24 mt-16 lg:mt-0'>
                <h5 className='text-2xl text-secondary font-medium mb-6 md:mb-12'>{item.testimonial.group}</h5>
                <div className='flex items-center mb-2'>
                  {Array.from({length: item.testimonial.stars}).map((star, starIndex) => (
                    <AiFillStar key={starIndex} className='text-yellow-400' size={32} />
                  ))}
                </div>
                <h3 className='max-w-full md:max-w-[700px] text-2xl lg:text-4xl leading-snug lg:leading-normal text-secondary mb-2'>
                  {item.testimonial.text}
                </h3>
                <p className='text-xl text-neutral-300 font-light mb-6 md:mb-12'>{item.testimonial.author}</p>
                <button className='w-[220px] lg:w-[180px] 2xl:w-[220px] h-[60px] lg:h-[50px] 2xl:h-[60px] bg-primary shadow-buttonShadow rounded-md text-xl lg:text-lg 2xl:text-xl text-white hover:brightness-90 duration-200'>
                  Read Their Story
                </button>
              </div>
            </div>
          )
        })}     
      </div>
    </div>
  )
}

export default Testimonials