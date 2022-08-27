import React from 'react';
import { IoIosArrowForward, IoIosArrowBack, IoMdClose } from 'react-icons/io';
import dataDetails from '../../data/dataDetails.json';

const LightBox = ({id, slideIndex, setSlideIndex}) => {
  const handleClose = (e) => {
    if (e.target.classList.contains('handleClose')) {
      setSlideIndex(null)
    }
  }

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

  if (slideIndex !== null) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (slideIndex !== null &&
    <div onClick={handleClose} className='handleClose w-full h-full fixed top-0 z-20 left-0 hidden sm:block bg-modalGradient'>
      <button onClick={() => {setSlideIndex(null)}} className='handleClose absolute top-[5%] left-[2%] z-30 py-2 md:py-3 px-4 md:px-6 flex justify-center items-center rounded-xl bg-buttonGradient hover:bg-dotsGradient duration-200'>
        <span><IoMdClose className='mr-2 text-white' size={28}/></span>
        <span className='text-white text-xl'>Close</span>
      </button>
      <div className='absolute top-[10%] xl:top-[5%] left-[49%] z-30 text-lg text-white'>
        <span>{slideIndex + 1}</span>
        <span className='mx-2'>/</span>
        <span>3</span>
      </div>
      <button onClick={prevSlide} className='w-[60px] h-[60px] absolute top-[45%] left-[2%] z-30 flex justify-center items-center overflow-hidden rounded-full text-white bg-buttonGradient hover:bg-dotsGradient duration-200 cursor-pointer'>
        <IoIosArrowBack size={24} />
      </button>
      <div className='absolute left-[15%] lg:left-[20%] right-[15%] lg:right-[20%] top-[20%] xl:top-[10%] bottom-[20%] xl:bottom-[10%] z-30 bg-white overflow-hidden'>
        {dataDetails[0].places && dataDetails[0].places.map((item, index) => {
          return (item.id === parseInt(id) &&
            <img key={index} src={item.photos[slideIndex]} className='w-full h-full object-cover' alt='Zoom' />
          )
        })}
      </div>
      <button onClick={nextSlide} className='w-[60px] h-[60px] absolute top-[45%] right-[2%] z-30 flex justify-center items-center overflow-hidden rounded-full text-white cursor-pointer bg-buttonGradient hover:bg-dotsGradient duration-200'>
        <IoIosArrowForward size={24} />
      </button>
    </div>
  )
}

export default LightBox