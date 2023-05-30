import React from 'react';
import BackButtonComponent from '../coursedetails/BackButtonComponent';
import WebPage from '../WebPage';

const MentalHealth = () => {
  return (
   
    <WebPage>
    <div className='container py-5'>  
    <div className='d-flex align-items-center'>
        <BackButtonComponent />
      <h2 className='mb-0'>Mental Health</h2>
    </div>
    </div>

  </WebPage>
  )
}

export default MentalHealth
