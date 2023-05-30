import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './styles/Style.css'

const LoginForm = (props) => {

    const [modalShow, setModalShow] = React.useState(false);
    const [login] = ['Login']

    const handleClose = () => {
        setModalShow(false)
    }
    const style= {
        backgroundColor: '#f16725',
        border: '1px solid #f16725',
        color: '#fff',
        width: '100%',
        borderRadius: '25px',
        padding: '8px',
        fontWeight: '600'
    }

    const inputstyle = {
        fontWeight: '600',
        lineHeight: '2.5',
        border: '2px solid #ced4da'
    }

    const [value, setValue] = useState()

  return (
    <div>
        <Button onClick={() => setModalShow(true)} variant="light" className="loginbtn rounded-pill bg-dark px-4 py-2 me-2 fw-bold bg-white">{props.login}</Button>
    
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
    onHide={() => setModalShow(false)}
    >
   
      <Modal.Body className="p-0">
            <div className='row align-items-center'>
                <div className="col-12 col-lg-4 col-md-5 form-mobile-img">
                    <div className='form_img'>
                        <img style={{minHeight: '540px'}} className='w-100' src="https://web.medvarsity.com/assets/assets/images/loginimage.jpg" alt="" />
                    </div>
                </div>
                <div className="col-12 col-lg-7 col-md-6 p-5 p-md-0">
                    <div className=''>
                        <div>
                            <img src="https://web.medvarsity.com/icons/logo.png" alt="" className='mb-4'/>
                            <h5 className="mb-4">Enter your mobile number or email address to start learning</h5> 
                        </div>
                        <div>
                            <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                            <PhoneInput
                                placeholder="Enter your mobile number"
                                className='form-control'
                                value={value}
                                style={inputstyle}
                                onChange={setValue}/>
                            
                               
                            </Form.Group>
                                <div className="mb-3 d-flex align-items-center justify-content-center">
                                    <hr style={{  border: '1px solid #000',width: '150px', height: '0'}}></hr>
                                    <p className="text-center mb-0 px-2 fw-bold" style={{color: '#c5c5c5'}}>OR</p>
                                    <hr style={{  border: '1px solid #000',width: '150px', height: '0'}}></hr>
                                </div>
                            <Form.Group className="mb-4" controlId="formBasicEmail">                          
                                <Form.Control style={inputstyle} type="email" placeholder="Enter your email address" />                       
                            </Form.Group>
                            <Form.Group className="mb-4 " controlId="formBasicCheckbox">
                                <Form.Check style={{marginLeft: '10px', fontSize:'14px'}} type="checkbox" label="Accept to receive promotional message and newsletter from Medvarsity" />
                            </Form.Group>
                            <Button type="submit" className="btn" style={style}>
                                Send OTP
                            </Button>

                            <p className="mb-0 mt-3" style={{fontSize: '14px'}}>By clicking on send OTP, I Agree to the <a href= "https://web.medvarsity.com/terms-and-conditions/" target="_blank" style={{textDecoration:'none'}} rel="noreferrer">Terms and Conditions</a> from Medvarsity </p>
                            </Form>
                        </div>
                    </div>
                </div>
               
            </div>
           
            <div className='row'>
                <div className='col-1 col-md-1 col-lg-1 pe-4 pe-md-1' style={{ position: 'absolute', top: '10px', right: '0'}}>
                    <img onClick={handleClose}  closeButton style={{width: '20px', cursor:'pointer'}} src='https://web.medvarsity.com/assets/assets/images/closeicon.png' alt='' /> 
                </div>
            </div>

        </Modal.Body>
      
    </Modal>
    </div>
  )
}

export default LoginForm