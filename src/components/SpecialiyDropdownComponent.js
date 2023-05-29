import React,{useState} from 'react'

import NavDropdown from 'react-bootstrap/NavDropdown';

const SpecialiyDropdownComponent = (dropdownData) => {
 
        const [selectedOption, setSelectedOption] = useState('');
      
        const handleOptionChange = (event) => {
          setSelectedOption(event.target.value);
          // Perform desired action based on selected option
        };
        const dropdownOptions = [
            { id: 1, value: 'option1', label: 'Option 1' },
            { id: 2, value: 'option2', label: 'Option 2' },
            { id: 3, value: 'option3', label: 'Option 3' },
            // Add more options as needed
          ];
        


  return (
    <div>
         <div className='d-flex align-items-center justify-content-center me-2'>
                        
                        <img src='https://web.medvarsity.com/assets/assets/images/speciality.png' style={{width: '12%'}} alt=''/>
                        <NavDropdown
                            title="Speciality"
                        
                            value={selectedOption}
                             onChange={handleOptionChange}
                             dropdownData={dropdownOptions}
                        >

                            
                            {dropdownData.map((option) => (
                                <NavDropdown.Item key={option.id} value={option.value} href="#action3">{option.label}</NavDropdown.Item>
                            ))}

                            
                        </NavDropdown>
                        </div>
    </div>
  )
}

export default SpecialiyDropdownComponent




