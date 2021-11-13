import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCards/ReviewCard';

const GetReviews = () => {

    const [review , setReview] = useState([])

  useEffect(()=>{
    fetch('https://mysterious-gorge-62564.herokuapp.com/reviews')
    .then(res=>res.json())
    .then(data=>setReview(data))
  },[])

    
    return (
        <div className='products-grid'>
            {
                review.map(r=> <ReviewCard
                key={r._id}
                r={r}
                ></ReviewCard>)
            }
        </div>
    );
};

export default GetReviews;