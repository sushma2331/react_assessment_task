import React from 'react'
import Card from 'react-bootstrap/Card';

const CourseDetailsCard = () => {

    const [time] = ['24 Months']
    const style = {
        border: '1px solid #dfd7d7',
        borderRadius: '26px',
        padding: '10px 20px',
        marginBottom: '15px'
        
    }

    const certificateImg = 'https://certificateapi.exper.com/media/EXPER_CER_202211011667277634774101.png'

    const pdf = 'https://web.medvarsity.com/assets/assets/images/pdf.png'
    const download = 'https://web.medvarsity.com/assets/assets/images/save_alt.png'


  return (
    <div>
      <Card  className='bg-white border-0' style={{ padding: '25px', marginBottom: '20px', borderRadius: '26px'}}>
          <Card.Body className="p-0">
            {/* <Card.Title className='mb-3'>{title}</Card.Title> */}
            
            {/* duration time */}
            <div style={style} className='card_content'>
            <div className='duration d-flex align-items-center justify-content-start'>
                <div className='me-3'>
                   <i class="bi bi-clock fs-4"></i>
                </div>
                <div>
                    <h6 className='mb-0' style={{color: '#918f8f'}}>Duration</h6>
                    <p className='mb-0'>{time}</p>
                </div>

            </div>

            </div>


            {/* Sample certificate */}
            <div className='card_content' style={style}>
                <div className='d-flex align-items-center justify-content-start px-2 mb-3'>
                    <div className='me-3'>
                        <i class="bi bi-person-vcard-fill fs-2" ></i>
                    </div>
                    <div>
                        <h5 className='mb-0' style={{color: '#1e1e1e'}}>Sample certificate</h5>
                    </div>                    
                </div>
                <div className='certificate_img' style={style}>
                    <img width={250} height={180} src={certificateImg} alt=""></img>
                </div>
                    
            </div>

             {/* Course eligibility */}
             <div className='card_content' style={style}>
                <div className=''>
                  
                    <h5 className='mb-3 pl-1' style={{color: '#1e1e1e'}}>Course Eligibility</h5>
                    <ul className='pl-4 mb-0'>
                        <li>MD/MS/DNB</li>
                        <li>MBBS</li>
                    </ul>
                                      
                </div>
                
                    
            </div>

             {/* Broucher download */}
             <div className='card_content' style={style}>
                <div className='d-flex align-items-center justify-content-start px-2'>
                    <div className='me-3'>
                        <img style={{width: '20px'}} src={pdf} alt='' />
                    </div>
                    <div>
                        <h6 className='mb-0 me-3' style={{color: '#1e1e1e'}}>Broucher Download</h6>
                    </div>   
                     <div className=''>
                        <img style={{width: '20px', cursor: 'pointer'}} src={download} alt='' />
                    </div>   
                            
                </div>
             
            </div>


          
            

        
          </Card.Body>
        </Card>

    </div>
  )
}

export default CourseDetailsCard
