import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useProducts from '../../../../hooks/useProducts';
import Watch from '../Watch/Watch';
import './Watches.css'
const Watches = () => {
    const [products , setProducts] = useState([])

    useEffect(()=>{

        fetch('https://mysterious-gorge-62564.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))


    } , [])

    return (
        <Container>
            <div className='products-grid'>
            {
                products.slice(0,6).map( watch=> <Watch 
                    key={watch.key}
                    watch={watch}
                    ></Watch>)
            }
        </div>
        </Container>
    );
};

export default Watches;