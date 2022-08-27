import React from 'react';
import { useParams } from 'react-router-dom';
import { Title, Gallery, About, Booking, Treasures, Testimonials } from '../components';

const Details = () => {
  const {id} = useParams(); // String

  return (
    <div>
      <Title id={id}/>
      <Gallery id={id} />
      <div className='w-full px-5 sm:px-10 pt-10 2xl:pt-16 flex justify-center items-center'>
        <div className='w-full mb-6 lg:mb-12 max-w-screen-xl flex flex-col justify-center items-start lg:grid grid-cols-1 lg:grid-cols-5 grid-rows-2 lg:grid-rows-1 gap-6'>
          <About id={id}/>
          <Booking id={id}/>
        </div>
      </div>
      <Treasures id={id} />
      <Testimonials id={id} />
    </div>
  )
}

export default Details