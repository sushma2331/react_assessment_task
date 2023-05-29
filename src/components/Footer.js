
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
        <>
              <footer class="bg-grey conatiner-fluid" style={{backgroundColor: 'rgb(26 26 26)'}}>
                <div class="container py-4">
                <div class="row py-4">
                    <div class="col-lg-4 col-md-4 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3" />
                        <img width={'70%'} src="https://web.medvarsity.com/assets/assets/images/footerlogo.png" alt=''></img>
                        

                    <div class="d-flex mt-5">
                        
                        <a style={{width:'12%', marginRight:'10px'}} href="https://www.facebook.com/medvarsity" target="_blank" rel="noreferrer" title="facebook"><img style={{width: '100%'}} src="https://web.medvarsity.com/assets/assets/images/medvarsity_facebook_icon.png" alt='' /></a>

                        <a style={{width:'12%', marginRight:'10px'}} href="https://twitter.com/medvarsity" target="_blank" rel="noreferrer" title="twitter"><img style={{width: '100%'}} src="https://web.medvarsity.com/assets/assets/images/medvarsity_twitter_icon.png" alt='' /></a>
                        
                        <a style={{width:'12%', marginRight:'10px'}} href="https://www.linkedin.com/company/medvarsity-online-ltd-" target="_blank" rel="noreferrer" title="linkedin"><img style={{width: '100%'}} src="https://web.medvarsity.com/assets/assets/images/medvarsity_linkedin_icon.png" alt='' /></a>

                        <a style={{width:'12%', marginRight:'10px'}} href="https://www.youtube.com/c/MedvarsityOnlineLtd" target="_blank" rel="noreferrer" title="youtube"><img style={{width: '100%'}} src="https://web.medvarsity.com/assets/assets/images/medvarsity_youtube_icon.png" alt='' /></a>

                        <a style={{width:'12%', marginRight:'10px'}} href="https://www.instagram.com/medvarsity_online/" target="_blank" rel="noreferrer" title="instagram"><img style={{width: '100%'}} src="https://web.medvarsity.com/assets/assets/images/medvarsity_instagram_icon.png" alt='' /></a>
                        
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-4 mb-4 mb-lg-0">
                    <h6 class="fw-bold mb-4 text-white">Company Info</h6>
                    <ul class="list-unstyled mb-0">
                        
                        <li class="mb-2">
                            {/* <a href="/aboutus" class="text-muted">About Us</a> */}
                            <Link style={{color: '#a7a7a7', textDecoration: 'none'}} to="/aboutus" >About Us</Link>
                            </li>
                        <li class="mb-2">
                             <Link style={{color: '#a7a7a7', textDecoration: 'none'}} to="/assimilate" >Assimilate</Link>
                        </li>
                        <li class="mb-2">
                            <Link style={{color: '#a7a7a7', textDecoration: 'none'}} to="/careers" >Careers</Link>
                        </li>
                        <li class="mb-2">
                            <Link style={{color: '#a7a7a7', textDecoration: 'none'}} to="/books" >Books & Journal</Link>
                        </li>
                    </ul>
                    </div>
                    <div class="col-lg-3 col-md-4 mb-sm-0 mb-lg-0">
                    <h6 class="fw-bold mb-4 text-white">Legal</h6>
                    <ul class="list-unstyled mb-0">

                    <li class="mb-2">
                            {/* <a href="/aboutus" class="text-muted">About Us</a> */}
                            <Link style={{color: '#a7a7a7', textDecoration: 'none'}} to="/" >Privacy Policy</Link>
                            </li>
                        <li class="mb-2">
                             <Link style={{color: '#a7a7a7', textDecoration: 'none'}} to="/" >Terms & Conditions</Link>
                        </li>
                        <li class="mb-2">
                            <Link style={{color: '#a7a7a7', textDecoration: 'none'}} to="/" >Finacial Support</Link>
                        </li>
                        <li class="mb-2">
                            <Link style={{color: '#a7a7a7', textDecoration: 'none'}} to="/" >Help & Support</Link>
                        </li>
                        
                    </ul>
                    </div>
                
                </div>
                </div>
            <div class="container">
                <hr style={{borderColor: 'white'}} />
            </div>
            
                <div class="py-4" style={{backgroundColor: 'rgb(26 26 26)'}}>
                <div class="container">
                <h5 class="fellowship" style={{color: '#fff'}}>Fellowship courses</h5>
                    <div class="footer-text pb-4">
                    <p style={{color: '#fff', fontSize: '14px'}}>Diabetes Mellitus with Contact Program | Critical Care Medicine with Contact Program | Family
                        Medicine with Contact Program | Clinical Cardiology with Contact Program | Internal Medicine
                        with Contact Progra | 2D Echocardiography with Contact Program | Endodontics with Contact
                        Program | Obs and Gynec with Contact Program | Embryology with Contact Program | Pediatrics with
                        Contact Program</p>
                    </div>
                </div>
                </div>



               
                    
               
            </footer>

        
        </>
  )
}

export default Footer