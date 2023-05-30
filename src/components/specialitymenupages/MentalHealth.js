import React from 'react';
import FaqComponent from '../FaqComponent';
import InviteFriend from '../InviteFriend';
import KeyFeatures from '../KeyFeatures';
import DescriptionCard from '../DescriptionCard';
import CourseDetails from '../coursedetails/CourseDetails';
import CourseaContent from '../coursedetails/CourseaContent';
import WebPage from '../WebPage';

const MentalHealth = () => {
  return (
    <WebPage>
      <div className='container'> 

          {/* course details div */}
          <div>
              <CourseaContent courseTitle={'Mental Health'} description={'This course will help to improve the care delivered not only in the ICU but also to critically ill patients in other areas such as the emergency room, postoperative care unit, and disaster settings.Clinical Preventive and Noninvasive Cardiology'} CourseStartdate={'22 May 2023'} CoursePrice={'₹21,400'}  />     
                      
          </div>


          {/* key fetaures  */}
          <div className='row'>
              <div className='col-12 col-md-6 col-lg-8'>                        
                  <KeyFeatures />
                  <DescriptionCard />
                
                  {/* <h1>ciriculum</h1> */}
                  <FaqComponent />
                  
              </div>
              <div className='col-12 col-md-6 col-lg-4 p-md-0 p-3'>
                  <CourseDetails />                        
                  <InviteFriend />
              </div>
          </div>

      </div>

  </WebPage>
   
  )
}

export default MentalHealth
