import React from 'react';
import dataDetails from '../../data/dataDetails.json';

const About = ({id}) => {
  return (
    <div className='w-full h-full lg:col-span-3'>
      {dataDetails[0].places && dataDetails[0].places.map((item, index) => {
        return (item.id === parseInt(id) &&
        <div key={index}>
          <h3 className='text-2xl text-secondary font-medium mb-4'>About the place</h3>
          <p className='text-lg leading-relaxed text-neutral-400 font-light'>{item.description}</p>
          <div className='w-full h-full mt-6 grid grid-cols-2 sm:grid-cols-4 grid-rows-4 sm:grid-rows-2 gap-4'>
            {Array.from({length: 8}).map((innerItem, innerIndex) => (
              <div key={innerIndex}>
                <img src={dataDetails[1].icons[innerIndex].icon} alt={dataDetails[1].icons[innerIndex].title} />
                <div className='mt-2'>
                  <span className='text-lg text-secondary font-medium mr-2'>{item.features[innerIndex]}</span>
                  <span className='text-lg text-neutral-400 font-light'>{dataDetails[1].icons[innerIndex].title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default About