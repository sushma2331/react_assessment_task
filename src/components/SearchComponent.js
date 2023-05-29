import React, { useState }from 'react'
import WebPage from './WebPage'
import './styles/Search.css'
import { Button } from 'react-bootstrap'
import BackButtonComponent from './coursedetails/BackButtonComponent'
import Card from 'react-bootstrap/Card';

export const SearchComponent = () => {

  const courses = [
    'Diabetes Mellitus with Contact Program',
    'Diabetes course with Contact Program',
    'Family Medicine with Contact Program',
    'Family care with Contact Program',
    'Clinical Cardiology with Contact Program',
    'Internal Medicine with Contact Program',
    'Internal body check with Contact Program',
    '2D Endodontics with Contact Program',
    'Endodontics with Contact Program',
    'Embryology Medicine with Contact Program',
    'Pediatrics course with Contact Program',
    'Gynecology and Obstetrics with Contact Program'
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredCourses = courses.filter((course) =>
      course.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredCourses);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  const handleInputClear = () => {
    setSearchQuery('');
    setSearchResults([]);
  };


  return (
    
    <WebPage>
        <div className='container py-5'>            
        <div class="row height d-flex">
          <div class="col-3 col-md-2 col-lg-1 mb-3 mb-md-0">           
              <BackButtonComponent />            
          </div>

          <div class="col-md-7">

            <div class="search">
            <i class="bi bi-search"></i>
              <input 
              courses={courses}
              value={searchQuery}
              onChange={handleSearch}
              onKeyPress={handleInputKeyPress}
              type="text"              
              class="form-control"
               placeholder="Search courses Eg: Diabetes, Endodontics... " />

              <Button onClick={handleSearch} class="btn">Search</Button>
            </div>
            
          </div>

          </div>



  
          {searchResults.length > 0 ? (
              <div className='row'>
              {searchResults.map((course, index) => (
                // <li key={index}>{course}</li>
                <div className='col-12 col-md-3'>
                <Card className='mb-2' body key={index}>{course}</Card>               
                </div>
              ))}
               <div class="search">
                <Button onClick={handleInputClear} class="btn">Clear</Button>
                </div>
            </div>
          
          ) : (
        <div>

          <div className='mt-5 mb-5'>
            <h2>Search for result</h2>
          </div>

          <div className='searchImg'>
            <img alt="" className='' src="https://web.medvarsity.com/assets/assets/images/noresult.png" />
          </div>
        </div>
    
      
      )}

       
          <div>
  

        </div>
        </div>

        
    </WebPage>
  )
}
