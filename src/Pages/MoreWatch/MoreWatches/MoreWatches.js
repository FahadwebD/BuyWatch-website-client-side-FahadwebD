import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer'
import { CircularProgress, Container, dividerClasses } from '@mui/material';
import MoreWatchesCard from '../MoreWatchesCard/MoreWatchesCard';


const MoreWatches = () => {
  
    const [products , setProducts] = useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))


    } , [])
    console.log(products)

    return (
       <div>
          {products?<div>
            <Navbar></Navbar>
            <Container>
            <div className='products-grid'>
            {
                products.map( watch=> <MoreWatchesCard 
                    key={watch.key}
                    watch={watch}
                    ></MoreWatchesCard>)
            }
        </div>
        </Container>
            <Footer></Footer>
        </div>:<Container sx={{marginTop:'300px'}}>
               <CircularProgress></CircularProgress>
           </Container>}
       </div>
    );
};

export default MoreWatches;