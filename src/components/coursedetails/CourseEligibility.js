import React from 'react'

const CourseEligibility = () => {

  
    const style = {
        border: '1px solid #dfd7d7',
        borderRadius: '26px',
        padding: '10px 20px',
        marginBottom: '15px'
        
    }

  return (
    <>
     
        {/* Course eligibility */}
        <div className='card_content' style={style}>
            <div className=''>
                
                <h5 className='mb-3 pl-1' style={{color: '#1e1e1e'}}>Course Eligibility</h5>
                <ul className='pl-4 mb-0'>
                    <li>MD/MS/DNB</li>
                    <li>MBBS</li>
                </ul>                                    
            </div>                
        </div>

           
    </>
  )
}

export default CourseEligibility
