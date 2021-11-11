import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Navbar from '../../Shared/Navbar/Navbar';
import SingleDetail from '../SingleDetail/SingleDetail';

const Details = () => {
    const {watchId} = useParams()
   
    const [products , setProducts] = useState([])

    useEffect(()=>{

        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))


    } , [])

    const [detail , setDetail] = useState({})

    useEffect(()=>{
  
        if (products.length){
            const id = watchId;
    
            const newP = products.find(w => w.key == id)
            setDetail(newP)
        }
        
      } ,[watchId ,products])
      
   

    
    return (
        <div>
            <Navbar/>
      
           <SingleDetail detail={detail}></SingleDetail>
        </div>
    );
};

export default Details;