import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Details, Error } from './pages';
import { Navbar, Footer } from './components';
 
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/place:id' element={<Details />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App