import React from 'react'
import WebPage from './WebPage';
import BackButtonComponent from './coursedetails/BackButtonComponent';

const Books = () => {
  return (
    <WebPage>
    <div className='container py-5'>  
    <div className='d-flex align-items-center'>
          <BackButtonComponent />
      <h2 className='mb-0'>Books</h2>
    </div>
    </div>

  </WebPage>
  )
}

export default Books