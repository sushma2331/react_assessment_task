import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'


const StarRatingComponent = () => {
    const [rating, setRating] = useState(0)
// Catch Rating value
const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
//   const onPointerMove = (value: 'number', index: number) => console.log(value, index)


  return (
    <div>
         <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        // onPointerMove={onPointerMove}
        initialValue={rating}
        /* Available Props */
      />
    </div>
  )
}

export default StarRatingComponent