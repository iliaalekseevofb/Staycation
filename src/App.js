import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Loading } from './components';
const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyDetails = React.lazy(() => import('./pages/Details'));
const LazyError = React.lazy(() => import('./pages/Error'));

 
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<Loading />}> 
            <LazyHome />
          </React.Suspense>
        } />
        <Route path='/place:id' element={
          <React.Suspense fallback={<Loading />}> 
            <LazyDetails />
          </React.Suspense>
        } />
        <Route path='*' element={
          <React.Suspense fallback={<Loading />}> 
            <LazyError />
          </React.Suspense>
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App