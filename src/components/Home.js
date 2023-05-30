import React from 'react'
import WebPage from './WebPage';
import FaqComponent from './FaqComponent';
import InviteFriend from './InviteFriend';
import InviteModal from './InviteModal';
import KeyFeatures from './KeyFeatures';
import DescriptionCard from './DescriptionCard';
import CourseDetailsCard from './CourseDetailsCard';
import CourseDetails from './coursedetails/CourseDetails';
import CourseaContent from './coursedetails/CourseaContent';
import VerticalStepBar from './VerticalStepBar';

const Home = () => {
  return (
    
        <WebPage>
            <div className='container'> 

                {/* <InviteModal /> */}
                {/* course details div */}
                <div>
                    <CourseaContent />              
                </div>


                {/* key fetaures  */}
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-8'>                        
                        <KeyFeatures />
                        <DescriptionCard />
                       
                        {/* <h1>ciriculum</h1> */}
                        <VerticalStepBar />

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

export default Home