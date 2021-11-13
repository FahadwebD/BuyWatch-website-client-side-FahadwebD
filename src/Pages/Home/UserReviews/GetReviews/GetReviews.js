import React, { useState } from 'react';
import ReviewCard from '../ReviewCards/ReviewCard';

const GetReviews = () => {

    const [review , setReview] = useState([])
    fetch('http://localhost:5000/reviews')
    .then(res=>res.json())
    .then(data=>setReview(data))
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