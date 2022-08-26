import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import dataDetails from '../../data/dataDetails.json';

const Slider = ({id}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== 2) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 2) {
      setSlideIndex(0);
    }
  }
  
  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 0) {
      setSlideIndex(2)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (
    <div className='w-full h-[320px] relative block sm:hidden rounded-xl overflow-hidden'>
      {dataDetails[0].places && dataDetails[0].places.map((item, index) => {
        return (item.id === parseInt(id) && 
          <div key={index}>
            {item.photos.map((photo, photoIndex) => (
              <div key={photoIndex} className={`${slideIndex === photoIndex ? 'opacity-100' : 'opacity-0'} w-full h-full absolute z-10 transition-opacity ease-in-out duration-200`}>
                <img src={photo} className='w-full h-full object-cover' alt={item.title} />
              </div>
            ))}
          </div>
        )
      })}
      <button onClick={nextSlide} className='w-[60px] h-[60px] absolute top-[43%] right-4 z-20 flex justify-center items-center rounded-full bg-arrowGradient hover:bg-white cursor-pointer '>
        <IoIosArrowForward className='text-secondary' size={26} />
      </button>
      <button onClick={prevSlide} className='w-[60px] h-[60px] absolute top-[43%] left-4 z-20 flex justify-center items-center rounded-full bg-arrowGradient hover:bg-white cursor-pointer'>
        <IoIosArrowBack className='text-secondary' size={26} />
      </button>
      <div className='absolute flex left-[50%] bottom-[10px] -translate-x-[50%] z-20'>
      {Array.from({length: 3}).map((item, index) => (
        <div key={index} onClick={() => {moveDot(index)}} className={slideIndex === index ? 'w-[15px] h-[15px] mx-[5px] rounded-full bg-white cursor-pointer' : 'w-[15px] h-[15px] mx-[5px] bg-dotsGradient rounded-full cursor-pointer'}></div>
      ))}
      </div>
    </div>
  )
}

export default Slider