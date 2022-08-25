import React from 'react';
import { useParams } from 'react-router-dom';
import { Title, Gallery, About, Booking, Treasures, Testimonials } from '../components';

const Details = () => {
  const {id} = useParams(); // String

  return (
    <div>
      <Title id={id}/>
      <Gallery id={id} />
      <div>
        <About />
        <Booking />
      </div>
      <Treasures />
      <Testimonials />
    </div>
  )
}

export default Details