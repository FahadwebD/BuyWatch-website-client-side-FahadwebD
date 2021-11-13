import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const ManageProduct = () => {
   
    const [product , setProduct] = useState([])


    useEffect(()=>{
        const url =`https://mysterious-gorge-62564.herokuapp.com/products`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handleProductDelete = (_id) =>{
        console.log(_id)
        const url=`https://mysterious-gorge-62564.herokuapp.com/products/${_id}`
        fetch(url, {
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
          if(data.deletedCount>0){
           
            alert('delete')
         
            const remaining = product.filter(order => order._id !== _id)
            
           setProduct(remaining)
          }
        })
      }
    return (
        <div>
            <h1>Total Product {product.length}</h1>
            <TableContainer component={Paper}>
      <Table className='table' sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Shop</TableCell>
            <TableCell align="right">Price</TableCell>
            
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.name}
              </TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.shop}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              
              <TableCell align="right"><Button onClick={()=>handleProductDelete(row._id)}>Delete </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageProduct;