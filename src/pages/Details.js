import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const {id} = useParams(); // String

  return (
    <div>{id}</div>
  )
}

export default Details