import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const SampleCertificate = () => {

    const style = {
        border: '1px solid #dfd7d7',
        borderRadius: '26px',
        padding: '10px 20px',
        marginBottom: '15px',
        cursor: 'pointer'
        
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
    const certificateImg = 'https://certificateapi.exper.com/media/EXPER_CER_202211011667277634774101.png'


  return (
    <>
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
                    <img src={certificateImg} onClick={handleShow} className='w-100' alt=""></img>
                </div>
                    
            </div>
            <Modal show={show} onHide={handleClose} centered className='cetrificate_modal' size="lg">
                <Modal.Header closeButton>
                <Modal.Title className='text-center'>Sample Certificate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img alt='' width={'100%'} height={'100%'} src={certificateImg} />
                </Modal.Body>
      
      </Modal>
    </>
  )
}

export default SampleCertificate
