import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Search } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);


      


  const handleSignUpClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  return (
    <>
    <div className='container-fluid bg-white sticky-top p-0'>
        <div className='container'>
            {[ 'xl' ].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 px-0 py-2">
                <Container fluid className='p-0'>
                    <Navbar.Brand>
                        <Link to="/home">
                            <img src="https://web.medvarsity.com/icons/logo.png" alt=''></img>
                        </Link>
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        <Link to="/home">
                            <img src="https://web.medvarsity.com/icons/logo.png" alt=''></img>
                        </Link>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-lg-center flex-grow-1 pe-3 align-items-lg-center">
                        
                        
                        <div className='d-flex align-items-lg-center justify-content-lg-center me-2 speciality'>
                        
                        <img src='https://web.medvarsity.com/assets/assets/images/speciality.png'  alt=''/>
                        <NavDropdown
                            title="Speciality"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                            
                            <div className='row'>

                                <div className='col-12 col-lg-4 col-md-12'>

                                <NavDropdown.Item href="/cardiology">Cardiology</NavDropdown.Item>

                                <NavDropdown.Item href="/criticalcare">Critical Care</NavDropdown.Item>

                                <NavDropdown.Item href="/dentistry">Dentistry</NavDropdown.Item>

                                <NavDropdown.Item href="/diabetesmellitus">Diabetes Mellitus</NavDropdown.Item>

                                <NavDropdown.Item href="/emergencymedicine">Emergency Medicine</NavDropdown.Item>

                                </div>
                                <div className='col-12 col-lg-4 col-md-12'>

                                <NavDropdown.Item href="/epidemiology">Epidemiology</NavDropdown.Item>

                                <NavDropdown.Item href="/gastroenterology"> Gastroenterology</NavDropdown.Item>

                                <NavDropdown.Item href="/obstetrics">Obstetrics</NavDropdown.Item>

                                <NavDropdown.Item href="/imaging"> Imaging </NavDropdown.Item>

                                <NavDropdown.Item href="/internalmedicine">Internal Medicine</NavDropdown.Item>
                                
                                </div>


                                <div className='col-12 col-lg-4 col-md-12'>

                                <NavDropdown.Item href="/management">Management</NavDropdown.Item>

                                <NavDropdown.Item href="/mentalhealth">  Mental Health</NavDropdown.Item>

                                <NavDropdown.Item href="/nephrology">Nephrology</NavDropdown.Item>

                                <NavDropdown.Item href="/nursing">  Nursing</NavDropdown.Item>

                                <NavDropdown.Item href="/oncology">Oncology</NavDropdown.Item>
                                
                                </div>
                            </div>
                        </NavDropdown>
                        </div>

                       
                        <Nav.Link className='careers' target="_blank" href="https://healthjobs.one/?ordering=relevance&direction=asc&keyword=Medvarsity+Online+Ltd">
                        <img src='https://web.medvarsity.com/assets/assets/images/careers.png'  alt=''/> Careers</Nav.Link>
                        </Nav>

                        <div className="d-flex align-items-lg-center cursor-pointer search_header">
                            <Link to='/search'>                            
                                <Search size={40} className='me-4 text-dark badge rounded-circle' style={{backgroundColor: '#e5e5e5', color: '#4c4740' }} />
                            </Link>
                        
                        </div>
                        
                    
                        <div className="signup">
                        <SignUpForm signUP={'Sign Up'} isOpen={isModalOpen} onClose={handleCloseModal}  />
                        </div>
                   
                       <div className="login">
                       <LoginForm login={'Login'} isOpen={isModalOpen} onClose={handleCloseModal}  />
                        
                       </div>
                      
                        
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
            ))}
        </div>
    </div>

      
    </>
  );
}

export default Header;