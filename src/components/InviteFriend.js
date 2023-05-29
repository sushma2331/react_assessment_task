import React, {useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InviteModal from './InviteModal';

const InviteFriend = () => {


    const img1 = 'https://web.medvarsity.com/assets/assets/images/image_114.png';

 
    const [title, desc, invite] = ['Invite your Friends', 'Emroll in the best medversity courses and grow your skills', 'INVITE NOW' ]
    


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
  

  return (
    <div className=''>
       <Card className='border-0' style={{ padding: '20px', marginBottom : '20px', borderRadius: '26px' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className='mb-3 fs-6'>
            {desc}
            </Card.Text>
            <div className='d-flex align-items-center'>
            <p className='me-2 mb-0 fw-bold' >{invite} </p>
            {console.log(openModal)}
            <InviteModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            
        
            {/* {isModelOpen && <InviteModal handleClose={handleCloseModal}  /> } */}

        </Card.Body>
        
        </Card>

     

    </div>
  )
}

export default InviteFriend

