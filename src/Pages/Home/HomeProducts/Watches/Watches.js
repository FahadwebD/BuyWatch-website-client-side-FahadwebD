import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './Watches.css'
const Watches = () => {
    const [products , setProducts] = useState([])

    useEffect(()=>{

        fetch('./watch.json')
        .then(res => res.json())
        .then(data => setProducts(data))


    } , [])
    return (
        <Container>
            <div className='products-grid'>
            {
                products.map( watch=> <Watch watch={watch}></Watch>)
            }
        </div>
        </Container>
    );
};

export default Watches;