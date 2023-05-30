import React from 'react';
import WebPage from '../WebPage';
import FaqComponent from '../FaqComponent';
import InviteFriend from '../InviteFriend';
import KeyFeatures from '../KeyFeatures';
import DescriptionCard from '../DescriptionCard';
import CourseDetails from '../coursedetails/CourseDetails';
import CourseaContent from '../coursedetails/CourseaContent';

const Gastroenterology = () => {
  return (
   
    <WebPage>
    <div className='container'> 


        {/* course details div */}
        <div>
            <CourseaContent courseTitle={'Gastroenterology'} description={'This course will help to improve the care delivered not only in the ICU but also to critically ill patients in other areas such as the emergency room, postoperative care unit, and disaster settings.Clinical Preventive and Noninvasive Cardiology'} CourseStartdate={'2 April 2023'} CoursePrice={'₹18,700'}  />     
                    
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

export default Gastroenterology
