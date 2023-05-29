import React from 'react'
import BackButtonComponent from './BackButtonComponent'
import { CardCategoryName } from './CardCategoryName';
import StarRatingComponent from './StarRatingComponent';
import VideoComponent from './VideoComponent';
import CourseEnquireyComponent from './CourseEnquireyComponent';

const CourseaContent = () => {

    const [courseTitle, description] = ['Clinical Preventive and Noninvasive Cardiology', 'This course will help to improve the care delivered not only in the ICU but also to critically ill patients in other areas such as the emergency room, postoperative care unit, and disaster settings.Clinical Preventive and Noninvasive Cardiology']

    const [CourseStartdate, CoursePrice] = ['29 May 2023', '₹16,717']

    const descriptionStyle = {
        width: '80%',
        fontSize: '16px'
    }

    const titleStyle ={
        fontSize: '37px',
        fontWeight: 'bold',
        marginTop: '35px',
        marginBottom: '30px'
    }
    

  return (
    <div className='row mb-4'>
        <div className="col-12 col-md-6 col-lg-9">
            <div className='row'>
                <div class="col-2 col-md-2 col-lg-1 mb-3 mb-md-0 pe-0">           
                <BackButtonComponent />            
                </div>
                <div class="col-9 col-lg-4 col-md-9">
                    <CardCategoryName />
                </div>
            </div>
            {/* course title */}
            <div>
                <p style={titleStyle}>{courseTitle}</p>
                <p style={descriptionStyle}>{description}</p>
            </div>
            
            {/* course rating */}
            <div className='my-5'>
                <StarRatingComponent />
            </div>

            {/* Course details */}
            <div className='d-flex align-items-center my-5'>
                <div className='me-4'>
                    <p className='mb-1'>Next Batch from</p>
                    <h5 className='mb-0'>{CourseStartdate}</h5>
                </div>
                <div className=''>
                    <p className='mb-1'>Course Price</p>
                    <div className='d-flex align-items-center '>
                    <p className='mb-0 me-2'>EMI starting </p>
                    <h5 className='mb-0'>{CoursePrice}</h5>
                    </div>
                    
                </div>
                
            </div>

            {/* Enquire Now */}
            <div>
                <CourseEnquireyComponent />
            </div>

        </div>
        <div className='col-12 col-md-6 col-lg-3 p-md-0 p-2'>

                <VideoComponent />

        </div>

        
    </div>
  )
}

export default CourseaContent