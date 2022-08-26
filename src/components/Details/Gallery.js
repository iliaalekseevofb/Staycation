import React, { useState } from 'react';
import { Slider, LightBox } from '../'
import dataDetails from '../../data/dataDetails.json';

const Gallery = ({id}) => {
  const [slideIndex, setSlideIndex] = useState(null);

  return (
    <div className='w-full px-5 sm:px-10 pt-5 sm:pt-10 flex justify-center items-center'>
      <div className='w-full max-w-screen-2xl'>
        {dataDetails[0].places && dataDetails[0].places.map((item, index) => {
          return (item.id === parseInt(id) &&
            <div key={index} className='sm:h-[320px] md:h-[400px] lg:h-[540px] xl:h-[600px] hidden sm:grid grid-cols-1 sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 gap-4'>
              {item.photos.map((photo, photoIndex) => (
                <div key={photoIndex} className={`w-full h-full ${photoIndex === 0 && 'row-span-1 sm:row-span-2'} rounded-xl overflow-hidden`}>
                  <img onClick={() => setSlideIndex(photoIndex)} className='w-full h-full object-cover hover:brightness-75 duration-200 cursor-pointer' src={photo} alt={item.title} />
                </div>
              ))}
            </div>    
          )
        })}
        <Slider id={id}/>
        <LightBox id={id} slideIndex={slideIndex} setSlideIndex={setSlideIndex} /> 
      </div>
    </div>
  )
}

export default Gallery