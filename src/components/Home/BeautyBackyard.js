import React from 'react';
import { anggana, seattleRain, tabbyTown, woddenPit } from '../../assets';

const options = [
  [tabbyTown, 'Tabby Town', 'Gunung Batu, Indonesia',  'Popular choice'],
  [anggana, 'Anggana', 'Bogor, Indonesia'],
  [seattleRain, 'Seattle Rain', 'Jakarta, Indonesia'],
  [woddenPit, 'Wodden Pit', 'Wonosobo, Indonesia']
]

const BeautyBackyard = () => {
  return (
    <div className='w-full px-5 sm:px-10 mt-10 2xl:mt-16 flex justify-center items-center'>
      <div className='w-full max-w-screen-2xl'>
        <h3 className='mb-5 text-secondary text-3xl font-medium'>Most Picked</h3>
        <div className='grid grid-cols-4 grid-flow-row gap-6'>
          {options.map((item, index) => (
            <div className='w-full h-56 bg-black rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover transition ease-in-out duration-500 hover:scale-125' src={item[0]} alt={item[1]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BeautyBackyard