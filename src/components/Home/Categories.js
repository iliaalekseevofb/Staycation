import React from 'react';
import { Link } from 'react-router-dom';
import dataHome from '../../data/dataHome.json';

const Categories = () => {
  return (
    <div id='categories' className='w-full px-5 sm:px-10 flex justify-center items-center'>
      <div className='w-full max-w-screen-2xl'>
        {dataHome[2].categories && dataHome[2].categories.map((item, index) => (
          <div key={index} className='w-full h-full mt-10 2xl:mt-16'>
            <h3 className='mb-5 text-secondary text-3xl font-medium'>{item.title}</h3>
            <div className='grid grid-cols-1 grid-flow-row sm:grid-cols-2 xl:grid-cols-4 sm:grid-rows-2 xl:grid-rows-1 gap-6'>
              {item.cards.map((card, innerIndex) => (
                <Link key={innerIndex} className='relative' to={`place${card.id.toString()}`}>
                  <div className='w-full h-56 bg-black rounded-xl overflow-hidden'>
                    <img className='w-full h-full object-cover transition ease-in-out duration-500 hover:scale-125' src={card.img} alt={card.title} />
                  </div>
                  <div className='pt-4'>
                    <h3 className='text-2xl text-secondary'>{card.title}</h3>
                    <h5 className='text-lg font-light text-neutral-300'>{card.location}</h5>
                  </div>
                  {card.popularChoice === 1 && 
                    <div className='absolute z-30 min-w-[180px] w-1/2 h-12 top-0 right-0 flex justify-center items-center rounded-tr-xl rounded-bl-xl bg-thirdly text-white text-lg'>
                      <p className='pr-1'>Popular Choice</p>
                    </div>
                  }
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories