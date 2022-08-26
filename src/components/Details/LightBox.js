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
    <div onClick={handleClose} className='overscroll-y-contain handleClose hidden sm:block fixed top-0 z-30 left-0 w-full h-full bg-modalGradient'>
      <button onClick={() => {setSlideIndex(null)}} className='handleClose py-2 md:py-3 xl:py-4 px-4 md:px-6 xl:px-8 z-40 rounded-xl flex justify-center items-center absolute top-[5%] left-[2%] bg-buttonGradient hover:bg-dotsGradient duration-200'>
        <span><IoMdClose className='text-white mr-2' size={32}/></span>
        <span className='text-white text-xl xl:text-2xl'>Close</span>
      </button>
      <div className='absolute z-40 text-white text-xl top-[10%] xl:top-[5%] left-[49%]'>
        <span>{slideIndex + 1}</span>
        <span className='mx-2'>/</span>
        <span>3</span>
      </div>
      <button onClick={prevSlide} className='w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] overflow-hidden absolute z-40 rounded-full flex justify-center items-center text-white cursor-pointer top-[45%] left-[2%] bg-buttonGradient hover:bg-dotsGradient duration-200'>
        <IoIosArrowBack size={24} />
      </button>
      <div className='absolute left-[15%] lg:left-[20%] right-[15%] lg:right-[20%] top-[20%] xl:top-[10%] bottom-[20%] xl:bottom-[10%] bg-white overflow-hidden'>
        {dataDetails[0].places && dataDetails[0].places.map((item, index) => {
          return (item.id === parseInt(id) &&
            <img key={index} src={item.photos[slideIndex]} className='w-full h-full object-cover' alt='Zoom' />
          )
        })}
      </div>
      <button onClick={nextSlide} className='w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] overflow-hidden absolute z-40 rounded-full flex justify-center items-center text-white cursor-pointer top-[45%] right-[2%] bg-buttonGradient hover:bg-dotsGradient duration-200'>
        <IoIosArrowForward size={24} />
      </button>
    </div>
  )
}

export default LightBox