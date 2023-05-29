import React from 'react'

export const CardCategoryName = () => {

    const [categoryTitle] = ['Fellowship']

  return (
    <div >
        <div className='bg-white px-4 w-50 rounded' style={{paddingTop: '0.7rem', paddingBottom: '0.7rem'}}>
            <h6 className='mb-0 text-center'>{categoryTitle}</h6>
        </div>
        
    </div>
  )
}
