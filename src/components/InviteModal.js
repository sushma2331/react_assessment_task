import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import copy from 'copy-to-clipboard';
import './styles/Style.css';

const InviteModal = () => {
  const whatsappImg = 'https://static.vecteezy.com/system/resources/thumbnails/018/930/748/small/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png';
  const fbImg = 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png';
  const instaImg = 'https://web.medvarsity.com/assets/assets/images/medvarsity_instagram_icon.png';
  const twitterImg = 'https://web.medvarsity.com/assets/assets/images/medvarsity_twitter_icon.png';

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }
 

  const handleShow = () => {
    setShow(true);
  }



  // Copy to clipboard

  const [copied, setCopied] = useState(false);

  const textRef = useRef(null);

  const handleCopy = () => {
    const textToCopy = textRef.current.textContent;
    copy(textToCopy);

    navigator.clipboard.writeText(textToCopy)
    .then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    })
    .catch((error) => {
      console.error('Failed to copy text: ', error);
    });
  };

  return (
    <>
      {/* <i onClick={handleShow} className="bi bi-share-fill fs-5" style={{ cursor: 'pointer' }}></i> */}
    <img onClick={handleShow} style={{ cursor: 'pointer', width: '15%' }} src="https://web.medvarsity.com/assets/assets/images/share.png" alt=''></img>
    <div className='invite-modal'>
      <Modal show={show} onHide={handleClose} className="invite_modal" centered >
        <Modal.Header closeButton className="border-0 ">
          <Modal.Title>Invite</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="Icon_container d-flex align-items-center justify-content-space-between">
            <a href="https://api.whatsapp.com/send?text=https://web.medvarsity.com/courses/clinical-preventive-and-noninvasive-cardiology" target="_blank" rel="noreferrer">
              <img src={whatsappImg} style={{ width: '100px' }} alt="" />
            </a>

            <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fweb.medvarsity.com%252Fcourses%252Fclinical-preventive-and-noninvasive-cardiology&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB" target="_blank" rel="noreferrer">
              <img src={fbImg} className="" style={{ width: '65px' }} alt="" />
            </a>
            <a href="https://www.instagram.com/medvarsity_online" target="_blank" rel="noreferrer">
              <img src={instaImg} style={{ width: '100px' }} alt="" />
            </a>
            <a href="https://twitter.com/intent/tweet?url=https://web.medvarsity.com/courses/clinical-preventive-and-noninvasive-cardiology" target="_blank" rel="noreferrer">
              <img src={twitterImg} className="" style={{ width: '80px' }} alt="" />
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <div className="pageLink">
            <h4>Page Link</h4>
            <div className="d-flex align-items-center justify-content-center rounded p-2" style={{ background: '#f8f8f8' }}>
              <div>
                <p ref={textRef} className="mb-0 w-75">
                  https://web.medvarsity.com/courses/clinical-preventive-and-noninvasive-cardiology
                </p>
              </div>

              {/* <i onClick={handleCopy} className="bi bi-clipboard" style={{ cursor: 'pointer' }}></i> */}
              {copied ? <i class="bi bi-check-circle-fill"></i> : <i onClick={handleCopy} className="bi bi-clipboard" style={{ cursor: 'pointer' }}></i>}


            </div>
          </div>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
};

export default InviteModal;