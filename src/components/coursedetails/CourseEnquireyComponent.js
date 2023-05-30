import React from 'react'
import EnquireyNowButtonComponent from './EnquireyNowButtonComponent'
import LoginForm from '../LoginForm'
import BookMarkComponent from './BookMarkComponent'
import InviteModal from '../InviteModal'
import '../styles/Style.css'

const CourseEnquireyComponent = () => {
  return (


     <div className='d-block d-md-flex enquireycomponent align-items-center'>        
        
        <div className='me-2'>
            <EnquireyNowButtonComponent text="Enquire Now" />
        </div>
        <div className='me-4'>
            <LoginForm login={'Buy Now'} />
        </div>
        <div className='me-4 mobilebmdiv'>
            <BookMarkComponent />
        </div>
        <div className='me-3 mobileinviteicondiv'>
            <InviteModal />
        </div>
        
    </div>

    // <div className='row align-items-center enquireycomponent'>
    //     <div className='col-6 col-md-4 col-lg-2 mb-2 me-lg-2'>
    //     <EnquireyNowButtonComponent text="Enquire Now" />
    //     </div>
    //     <div className='col-5 col-md-3 col-lg-2 mb-2'>
    //     <LoginForm login={'Buy Now'} />
    //     </div>
    //     <div className='col-2 col-md-1 col-lg-1 mb-2 p-0'>
    //     <BookMarkComponent />
    //     </div>
    //     <div className='col-9 col-md-4 col-lg-3 mb-2 p-0'>
    //     <InviteModal />
    //     </div>
    // </div>



    // <div className='d-flex enquireycomponent align-items-center'>        
        
    //     <div className='me-2'>
    //         <EnquireyNowButtonComponent text="Enquire Now" />
    //     </div>
    //     <div className='me-4'>
    //         <LoginForm login={'Buy Now'} />
    //     </div>
    //     <div className='me-4' style={{width: '4%'}}>
    //         <BookMarkComponent />
    //     </div>
    //     <div className='me-3' style={{width: '25%'}}>
    //         <InviteModal />
    //     </div>
        
    // </div>
  )
}

export default CourseEnquireyComponent