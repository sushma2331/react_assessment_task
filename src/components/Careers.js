import React from 'react';
import WebPage from './WebPage';
import BackButtonComponent from './coursedetails/BackButtonComponent';


const Careers = () => {
  return (
    <WebPage>
    <div className='container py-5'>  
    <div className='d-flex align-items-center'>
          <BackButtonComponent />
      <h2 className='mb-0'>Careers</h2>
    </div>
    </div>
  </WebPage>
  )
}

export default Careers