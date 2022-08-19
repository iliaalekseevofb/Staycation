import React from 'react'

const MostPicked = () => {
  return (
    <div className='w-full px-5 sm:px-10 mt-10 2xl:mt-16 flex justify-center items-center'>
      <div className='w-full max-w-screen-2xl'>
        <h3 className='mb-5 text-secondary text-3xl font-medium'>Most Picked</h3>
        <div className='grid grid-rows-2 grid-cols-3 gap-6'>
          <div className='row-span-2 bg-black rounded-xl'>hello</div>
          <div className='h-72 bg-black rounded-xl'>hello</div>
          <div className='h-72 bg-black rounded-xl'>hello</div>
          <div className='h-72 bg-black rounded-xl'>hello</div>
          <div className='h-72 bg-black rounded-xl'>hello</div>
        </div>
      </div>
    </div>
  )
}

export default MostPicked