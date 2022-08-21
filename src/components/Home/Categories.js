import React from 'react';
import { Link } from 'react-router-dom';
import { anggana, seattleRain, tabbyTown, woddenPit, cashVille, greenPark, minimal, oneFive, podoWae, psWood, silverRain, staysHome } from '../../assets';

const categories = ['Houses with beauty backyard', 'Hotels with large living room', 'Apartments with kitchen set'];
const sortedByCategories = [
  [ 
    [tabbyTown, 'Tabby Town', 'Gunung Batu, Indonesia', 'Popular choice'],
    [anggana, 'Anggana', 'Bogor, Indonesia'],
    [seattleRain, 'Seattle Rain', 'Jakarta, Indonesia'],
    [woddenPit, 'Wodden Pit', 'Wonosobo, Indonesia']
  ],
  [
    [greenPark, 'Green Park', 'Tangerang, Indonesia'],
    [podoWae, 'Podo Wae', 'Madiun, Indonesia'],
    [silverRain, 'Silver Rain', 'Bandung, Indonesia'],
    [cashVille, 'Cashville', 'Kemang, Indonesia', 'Popular choice']
  ],
  [
    [psWood, 'PS Wood', 'Depok, Indonesia'],
    [oneFive, 'One Five', 'Jakarta, Indonesia'],
    [minimal, 'Minimal', 'Bogor, Indonesia', 'Popular choice'],
    [staysHome, 'Stays Home', 'Wonosobo, Indonesia']
  ]
]

const Categories = () => {
  return (
    <div id='categories' className='w-full px-5 sm:px-10 flex justify-center items-center'>
      <div className='w-full max-w-screen-2xl'>
        {sortedByCategories.map((item, index) => (
          <div key={index} className='w-full h-full mt-10 2xl:mt-16'>
            <h3 className='mb-5 text-secondary text-3xl font-medium'>{categories[index]}</h3>
            <div className='grid grid-cols-1 grid-flow-row sm:grid-cols-2 xl:grid-cols-4 sm:grid-rows-2 xl:grid-rows-1 gap-6'>
              {item.map((innerItem, innerIndex) => (
                <Link key={innerIndex} className='relative' to={`place${[index + 1].toString()}${[innerIndex + 1].toString()}`}>
                  <div className='w-full h-56 bg-black rounded-xl overflow-hidden'>
                    <img className='w-full h-full object-cover transition ease-in-out duration-500 hover:scale-125' src={innerItem[0]} alt={innerItem[1]} />
                  </div>
                  <div className='pt-4'>
                    <h3 className='text-2xl text-secondary'>{innerItem[1]}</h3>
                    <h5 className='text-lg font-light text-neutral-300'>{innerItem[2]}</h5>
                  </div>
                  {innerItem?.[3] && 
                    <div className='absolute z-30 min-w-[180px] w-1/2 h-12 top-0 right-0 flex justify-center items-center rounded-tr-xl rounded-bl-xl bg-thirdly text-white text-lg'>
                      <p className='pr-1'>{innerItem[3]}</p>
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