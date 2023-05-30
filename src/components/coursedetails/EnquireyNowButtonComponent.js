import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Select from 'react-select';
import '../styles/Style.css'



const options = [
    { value: 'MBBS', label: 'MBBS' },
    { value: 'Management', label: 'Management' },
    { value: 'BDS/MDS', label: 'BDS/MDS' },
    { value: 'Post Graduate - Medical', label: 'Post Graduate - Medical' },
  ];

const EnquireyNowButtonComponent = (props) => {

    const [smShow, setSmShow] = useState(false);

    const inputstyle = {
        fontWeight: '400',
        lineHeight: '2.5',
        border: '0',
        backgroundColor: '#f8f8f8'
    }

    const [value, setValue] = useState()


    const [selectedOption, setSelectedOption] = useState(null);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  

    const style={
        backgroundColor: '#f16725',
        border: '1px solid #f16725',
        borderRadius: '25px',
        fontWeight: '600',
        fontSize: '14px',
        margin: '0 auto',
        display: 'block',
        width: '190px',
        height: '42px'
    }
  return (
    <div>
      <Button className='enquiryButton' onClick={() => setSmShow(true)} style={style}>{props.text}</Button>

     
        <Modal
          // size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          centered
          className="enquireyModal"
          
        >
          <Modal.Header closeButton className='border-0'>
                  <Modal.Title id="example-modal-sizes-title-sm">
                     <h6> Enter your details here</h6>
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            
                          <Form.Group className="mb-4" controlId="validationCustom01"> 
                          <Form.Label>First Name</Form.Label>                         
                              <Form.Control required style={inputstyle} type="firstname" placeholder="First Name" />
                              <Form.Control.Feedback type="invalid">First name cannot be empty</Form.Control.Feedback>                       
                          </Form.Group>

                          <Form.Group className="mb-4" controlId="validationCustom02">       
                          <Form.Label>Last Name</Form.Label>                   
                              <Form.Control required style={inputstyle} type="lastname" placeholder="Last Name" />   
                              <Form.Control.Feedback type="invalid">Last name cannot be empty</Form.Control.Feedback>                    
                          </Form.Group>

                          <Form.Label>Email Id</Form.Label>
                          <Form.Group className="mb-4" controlId="validationCustom03">                          
                              <Form.Control required style={inputstyle} type="email" placeholder="Email Id" />   
                              <Form.Control.Feedback type="invalid">Email cannot be empty</Form.Control.Feedback>                    
                          </Form.Group>
                      

                          <Form.Group className="mb-3" controlId="validationCustom04">
                          <Form.Label  > Mobile Number</Form.Label>
                            
                              <PhoneInput
                                  placeholder="Enter your mobile number"
                                  className='form-control bg-grey'
                                  value={value}
                                  style={inputstyle}
                                  
                                  onChange={setValue}/>
                                
                            
                              
                                <Form.Control.Feedback type="invalid">Enter mobile no</Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group className="mb-4" controlId="validationCustom05">                          
                            <Form.Label  required>Qualification</Form.Label>
                            <Select
                                  style={{ backgroundColor: '#f8f8f8'}}
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />                      
                        </Form.Group>

                              <Form.Group className="mb-4 " controlId="formBasicCheckbox">
                                  <Form.Check style={{marginLeft: '10px', fontSize:'14px'}} type="checkbox" label="Accept to receive promotional message and newsletter from Medvarsity" />
                              </Form.Group>

                              
                              <Button type="submit" className="btn" style={style}>
                                  Send
                              </Button>

                              
                              </Form>
          </Modal.Body>
        </Modal>
    
    </div>
  )
}

export default EnquireyNowButtonComponent