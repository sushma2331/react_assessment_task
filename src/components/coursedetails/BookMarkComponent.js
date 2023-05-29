import React, { useState, useEffect } from 'react'

const BookMarkComponent = () => {
    const style={
        width: '100%',
        cursor: 'pointer', 
    }

   
  return (
    <div>
      
        {/* <img alt="" onClick={() => handleBookmark('Bookmark Item')} style={style} src="https://web.medvarsity.com/assets/assets/images/bookmark.png" /> */}
     
         <img alt="" style={style} src="https://web.medvarsity.com/assets/assets/images/bookmark.png" />
          
     
      
    </div>
  )
}

export default BookMarkComponent