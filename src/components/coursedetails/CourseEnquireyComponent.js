import React from 'react'
import EnquireyNowButtonComponent from './EnquireyNowButtonComponent'
import LoginForm from '../LoginForm'
import BookMarkComponent from './BookMarkComponent'
import InviteModal from '../InviteModal'


const CourseEnquireyComponent = () => {
  return (
    <div className='d-flex'>        
        
        <div className='me-2'>
            <EnquireyNowButtonComponent text="Enquire Now" />
        </div>
        <div className='me-4'>
            <LoginForm login={'Buy Now'} />
        </div>
        <div className='me-4' style={{width: '5%'}}>
            <BookMarkComponent />
        </div>
        <div className='me-3' style={{width: '35%'}}>
            <InviteModal />
        </div>
        
    </div>
  )
}

export default CourseEnquireyComponent