import React from 'react';
import { Link } from 'react-router-dom';
import dataDetails from '../../data/dataDetails.json';

const Treasures = ({id}) => {
  return (
    <div className='w-full px-5 sm:px-10 pt-5 sm:pt-10 flex justify-center items-center'>
      <div className='w-full max-w-screen-2xl'>
        <h3 className='mb-6 lg:mb-8 text-2xl text-secondary font-medium'>Treasures to choose</h3>
        {dataDetails[0].places && dataDetails[0].places.map((item, index) => {
          return (item.id === parseInt(id) & parseInt(id) + 4 <= 17
            ?
            <div key={index} className='w-full h-full grid grid-cols-1 grid-flow-row sm:grid-cols-2 xl:grid-cols-4 sm:grid-rows-2 xl:grid-rows-1 gap-6'>
              {Array.from({length: 4}).map((innerItem, innerIndex) => (
                <Link key={innerIndex} className='relative' to={`/place${[parseInt(id)+innerIndex+1].toString()}`}>
                  <div className='w-full h-56 bg-black rounded-xl overflow-hidden'>
                    <img className='w-full h-full object-cover transition ease-in-out duration-500 hover:scale-125' src={dataDetails[0].places[parseInt(id)+innerIndex].photos[0]} alt={dataDetails[0].places[parseInt(id)+innerIndex].title} />
                  </div>
                  <div className='pt-4'>
                    <h3 className='text-2xl text-secondary'>{dataDetails[0].places[parseInt(id)+innerIndex].title}</h3>
                    <h5 className='text-lg font-light text-neutral-300'>{dataDetails[0].places[parseInt(id)+innerIndex].title}</h5>
                  </div>
                  {dataDetails[0].places[parseInt(id)+innerIndex].popularChoice === 1 && 
                    <div className='absolute z-30 min-w-[180px] w-1/2 h-12 top-0 right-0 flex justify-center items-center rounded-tr-xl rounded-bl-xl bg-thirdly text-white text-lg'>
                      <p className='pr-1'>Popular Choice</p>
                    </div>
                  }
                </Link>
              ))}
            </div>
            : 
            <div key={index} className='w-full h-full'>
              {item.id === parseInt(id) &&
                <div className='w-full h-full grid grid-cols-1 grid-flow-row sm:grid-cols-2 xl:grid-cols-4 sm:grid-rows-2 xl:grid-rows-1 gap-6'>
                  {Array.from({length: 4}).map((innerItem, innerIndex) => (
                    <Link key={innerIndex} className='relative' to={`/place${[innerIndex].toString()}`}>
                      <div className='w-full h-56 bg-black rounded-xl overflow-hidden'>
                        <img className='w-full h-full object-cover transition ease-in-out duration-500 hover:scale-125' src={dataDetails[0].places[innerIndex].photos[0]} alt={dataDetails[0].places[innerIndex].title} />
                      </div>
                      <div className='pt-4'>
                        <h3 className='text-2xl text-secondary'>{dataDetails[0].places[innerIndex].title}</h3>
                        <h5 className='text-lg font-light text-neutral-300'>{dataDetails[0].places[innerIndex].title}</h5>
                      </div>
                      {dataDetails[0].places[innerIndex].popularChoice === 1 && 
                        <div className='absolute z-30 min-w-[180px] w-1/2 h-12 top-0 right-0 flex justify-center items-center rounded-tr-xl rounded-bl-xl bg-thirdly text-white text-lg'>
                          <p className='pr-1'>Popular Choice</p>
                        </div>
                      }
                    </Link>
                  ))}
                </div>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Treasures