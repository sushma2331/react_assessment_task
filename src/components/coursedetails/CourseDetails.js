import React from 'react'
import DownloadBroucher from './DownloadBroucher';
import CourseEligibility from './CourseEligibility';
import Card from 'react-bootstrap/Card';
import CourseDuration from './CourseDuration';
import SampleCertificate from './SampleCertificate';
import PartnersCard from './PartnersCard';
import Faculity from './Faculity';


export default function CourseDetails() {
  return (
    <>
    <Card  className='bg-white border-0' style={{ padding: '25px', marginBottom: '20px', borderRadius: '26px'}}>
          <Card.Body className="p-0">
            <CourseDuration />
            <SampleCertificate />
             <CourseEligibility />
             <DownloadBroucher />
             <Faculity />
             <PartnersCard />
           
             
        </Card.Body>
        </Card>

    
    </>
  )
}
