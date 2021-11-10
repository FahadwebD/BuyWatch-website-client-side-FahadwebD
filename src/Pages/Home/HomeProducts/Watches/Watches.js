import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useProducts from '../../../../hooks/useProducts';
import Watch from '../Watch/Watch';
import './Watches.css'
const Watches = () => {
    const [products] = useProducts()
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