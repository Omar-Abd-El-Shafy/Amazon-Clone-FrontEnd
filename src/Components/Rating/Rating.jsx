import React from 'react'

const Rating = ({rating,Reviews}) => {
  return (
  <div className="">
    <span className="text-warning">
      <i
        className={
          rating >= 1
            ? 'fas fa-star'
            : rating >= 0.5
            ? 'fas fa-star-half'
            : 'far fa-star'
        }  
      />
    </span>
    <span className="text-warning">
      <i
        className={
          rating >= 2
            ? 'fas fa-star'
            : rating >= 1.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      />
    </span>
    <span className="text-warning">
      <i
        className={
          rating >= 3
            ? 'fas fa-star'
            : rating >= 2
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      />
    </span>
    <span className="text-warning">
      <i
        className={
          rating >= 4
            ? 'fas fa-star'
            : rating >= 3.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      />
    </span>
    <span className="text-warning">
      <i
        className={
          rating >= 5
            ? 'fas fa-star'
            : rating >= 4.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      />
    </span>
    <div> {Reviews}  Reviews</div>
  </div>

  )
}

export default Rating