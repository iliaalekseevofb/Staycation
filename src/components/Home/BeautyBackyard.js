import React from 'react';
import { Link } from 'react-router-dom';
import { anggana, seattleRain, tabbyTown, woddenPit } from '../../assets';

const options = [
  [tabbyTown, 'Tabby Town', 'Gunung Batu, Indonesia', 'Popular choice'],
  [anggana, 'Anggana', 'Bogor, Indonesia'],
  [seattleRain, 'Seattle Rain', 'Jakarta, Indonesia'],
  [woddenPit, 'Wodden Pit', 'Wonosobo, Indonesia']
]

const BeautyBackyard = () => {
  return (
    <div className='w-full px-5 sm:px-10 mt-10 2xl:mt-16 flex justify-center items-center'>
      <div className='w-full max-w-screen-2xl'>
        <h3 className='mb-5 text-secondary text-3xl font-medium'>Houses with beauty backyard</h3>
        <div className='grid grid-cols-1 grid-flow-row sm:grid-cols-2 xl:grid-cols-4 sm:grid-rows-2 xl:grid-rows-1 gap-6'>
          {options.map((item, index) => (
            <Link key={index} className='relative' to={`place${[index + 1].toString()}`}>
              <div className='w-full h-56 bg-black rounded-xl overflow-hidden'>
                <img className='w-full h-full object-cover transition ease-in-out duration-500 hover:scale-125' src={item[0]} alt={item[1]} />
              </div>
              <div className='pt-4'>
                <h3 className='text-2xl text-secondary'>{item[1]}</h3>
                <h5 className='text-lg font-light text-neutral-300'>{item[2]}</h5>
              </div>
              {item?.[3] && 
                <div className='absolute z-30 min-w-[180px] w-1/2 h-12 top-0 right-0 flex justify-center items-center rounded-tr-xl rounded-bl-xl bg-thirdly text-white text-lg'>
                  <p className='pr-1'>{item[3]}</p>
                </div>
              }
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BeautyBackyard