import { ConfirmationNumber } from '@mui/icons-material';
import { Container } from '@mui/material';
import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Companies.css'




const Companies = () => {

    const breakPoints = [
        {width:500 , itemsToShow:1},
        {width:760 , itemsToShow:2},
        {width:1200 , itemsToShow:3},
        {width:1500 , itemsToShow:4}
    ]
    return (
        <div className='container-extra'>
            <h1>Companies We Contract</h1>
           
           <Carousel breakPoints={breakPoints}>

<div><img style={{height:200 , width:200}} src="https://logos-download.com/wp-content/uploads/2019/11/Romanoff_Watch_Company_Logo.png" alt="" /></div>
<div><img style={{height:200 , width:200}} src="https://wallpapercave.com/wp/wp3604818.png" alt="" /></div>
<div><img style={{height:200 , width:200}} src="https://m.media-amazon.com/images/S/abs-image-upload-na/9/AmazonStores/A21TJRUUN4KGV/be98bdfe6a6b793215e4505a20e1de7f.w1000.h1000.png" alt="" /></div>
<div><img style={{height:200 , width:200}} src="https://lezebre.lu/images/detailed/23/sticker-omega-logo-3.png" alt="" /></div>

</Carousel>
          
        </div>
    );
};

export default Companies;