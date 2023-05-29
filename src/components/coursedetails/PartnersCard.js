import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const PartnersCard = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    const style = {
        border: '1px solid #dfd7d7',
        borderRadius: '28px',
        padding: '10px 20px',
        marginBottom: '15px'
        
    }

    

     const carouselImg1 = 'https://cmsapi.exper.com/media/course/BAC_A_ODBL_2-01_MkDO5Uy.png'
     const carouselImg2 = 'https://cmsapi.exper.com/media/course/BAC_A_ODBL_2-01_MkDO5Uy.png'
     const carouselImg3 = 'https://cmsapi.exper.com/media/course/BAC_A_ODBL_2-01_MkDO5Uy.png'
      
    

  return (
    <div>
        {/* Parteners */}
        <div className='card_content' style={style}>
                <div className='d-flex align-items-center justify-content-start px-2 mb-3'>
                    <div className='me-3'>
                        <i class="bi bi-person-vcard-fill fs-2" style={{color: '#b9b9b9'}}></i>
                    </div>
                    <div>
                        <h5 className='mb-0' style={{color: '#b9b9b9'}}>Accrediattaion Partners</h5>
                    </div>                    
                </div>
                <div className='certificate_img' style={style}>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      className="d-block w-75 mx-auto"
                      src={carouselImg1}
                      alt="First slide"
                    />
                  
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-75 mx-auto"
                      src={carouselImg2}
                      alt="Second slide"
                    />

                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-75 mx-auto"
                      src={carouselImg3}
                      alt="Third slide"
                    />

                  </Carousel.Item>
                </Carousel>
                </div>



            </div>

    </div>
  )
}

export default PartnersCard
