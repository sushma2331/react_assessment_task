import React from 'react'

const CourseDuration = () => {

    const style = {
        border: '1px solid #dfd7d7',
        borderRadius: '26px',
        padding: '10px 20px',
        marginBottom: '15px'
        
    }

    const [time] = ['24 Months']

  return (
    <>
         {/* duration time */}
         <div style={style} className='card_content'>
            <div className='duration d-flex align-items-center justify-content-start'>
                <div className='me-3'>
                   <i class="bi bi-clock fs-4"></i>
                </div>
                <div>
                    <h6 className='mb-0' style={{color: '#918f8f'}}>Duration</h6>
                    <p className='mb-0'>{time}</p>
                </div>

            </div>

            </div>
    </>
  )
}

export default CourseDuration
