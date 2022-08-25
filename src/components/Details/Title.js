import React from 'react';
import { Link } from 'react-router-dom';

const Title = ({id}) => {
  return (
    <div className='w-full px-5 sm:px-10 pt-10 2xl:pt-16 flex justify-center items-center'>
      <div className='w-full max-w-screen-2xl grid grid-cols-3 grid-rows-1 gap-6'>
        <div>
          <Link to='/'>Home</Link>
          <span>/</span>
          <Link to={`/place${id}`}>Place Details</Link>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Title