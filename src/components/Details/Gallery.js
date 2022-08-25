import React from 'react';
import dataDetails from '../../data/dataDetails.json';

const Gallery = ({id}) => {
  return (
    <div className='w-full px-5 sm:px-10 pt-5 sm:pt-10 2xl:pt-16 flex justify-center items-center'>
      <div className='w-full max-w-screen-2xl'>
        {dataDetails[0].places && dataDetails[0].places.map((item, index) => {
          return (item.id === parseInt(id) &&
            <div key={index} className='w-full h-[600px] grid grid-cols-2 grid-rows-2 gap-4'>
              <div className='w-full h-full row-span-2 rounded-xl overflow-hidden'>
                <img className='w-full h-full object-cover' src={item.photos.photo1} alt={item.title} />
              </div>
              <div className='w-full h-full rounded-xl overflow-hidden'>
                <img className='w-full h-full object-cover' src={item.photos.photo2} alt={item.title} />
              </div>
              <div className='w-full h-full rounded-xl overflow-hidden'>
                <img className='w-full h-full object-cover' src={item.photos.photo3} alt={item.title} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery