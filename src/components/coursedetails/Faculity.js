import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Faculity = () => {
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

    

     const carouselImg1 = 'https://admin.exper.com/media/Screenshot_2023-02-03_at_10.29.30_PM_1zGjdjK.png'
     const carouselImg2 = 'https://admin.exper.com/media/Screenshot_2023-02-03_at_10.29.30_PM_1zGjdjK.png'
     const carouselImg3 = 'https://admin.exper.com/media/Screenshot_2023-02-03_at_10.29.30_PM_1zGjdjK.png'
      
    

  return (
    <div>
        {/* Faculity */}
        <div className='card_content' style={style}>
                <div className='d-flex align-items-center justify-content-start px-2 mb-3'>
                    <div className='me-3'>
                        <i class="bi bi-mortarboard fs-2" style={{color: '#b9b9b9'}}></i>
                    </div>
                    <div>
                        <h5 className='mb-0' style={{color: '#b9b9b9'}}>Director and Faculity</h5>
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
                     {/* <Carousel.Caption>
                        <h5>Dr Ravi R Kasliwal</h5>
                        <p>
                            Chairman, Clinical & preventive Cardiology, Medanta Hospitals
                        </p>
                        </Carousel.Caption>
                   */}
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

export default Faculity
