import React from 'react'
import EnquireyNowButtonComponent from './coursedetails/EnquireyNowButtonComponent'

const StickyFooter = () => {
  return (


  //   <footer class="footer bg-dark w-100 py-3 position-absolute bottom-0 start-50 translate-middle-x">
  //   <div class="container">
  //     <span class="text-light">Place sticky footer content here.</span>
  //   </div>
  // </footer>
    <div className='stickyFooter fixed-bottom'>
        <div className='container'>
            <div className="d-flex align-items-center justify-content-center">
                <div className=''>
                    <img className='connectImg' width={60} src="https://web.medvarsity.com/assets/assets/images/image_154.png" />
                  </div>
                  <div>
                    <h6 className='connect text-white mb-0'>IT'S REALLY EASY TO CONNECT WITH US</h6>                   
                  </div>
                  <div className="">
                  <EnquireyNowButtonComponent text={'Enquire Now'} />
                </div>
                {/* <div className="col-md-3">
                  <div className=''>
                    <img width={100} src="https://web.medvarsity.com/assets/assets/images/image_154.png" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h4>IT'S REALLY EASY TO CONNECT WITH US</h4>
                  </div>
                </div>
                <div className="col-md-3">
                  <EnquireyNowButtonComponent text={'Enquire Now'} />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default StickyFooter
