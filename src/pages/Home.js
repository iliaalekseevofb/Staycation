import React from 'react';
import { Main, MostPicked, Categories, Testimonials } from '../components';

const Home = () => {
  return (
    <div>
      <Main />
      <MostPicked />
      <Categories />
      <Testimonials id="1"/>
    </div>
  )
}

export default Home