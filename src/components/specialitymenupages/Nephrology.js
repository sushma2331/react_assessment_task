import React from 'react';
import BackButtonComponent from '../coursedetails/BackButtonComponent';
import WebPage from '../WebPage';

const Nephrology = () => {
  return (
   
    <WebPage>
    <div className='container py-5'>  
    <div className='d-flex align-items-center'>
        <BackButtonComponent />
      <h2 className='mb-0'>Nephrology</h2>
    </div>
    </div>

  </WebPage>
  )
}

export default Nephrology