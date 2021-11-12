import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import './Myorder.css'

const Myorders = () => {
    const {user} = useAuth();
    console.log(user)

    const [orders , setOrders] = useState([])

    useEffect(()=>{
        const url =`http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    
    const handleOrderDelete = (_id) =>{
           console.log(_id)
           const url=`http://localhost:5000/orders/${_id}`
           fetch(url, {
             method:'DELETE'
           })
           .then(res => res.json())
           .then(data=>{
             if(data.deletedCount>0){
              
               alert('deleye')
            
               const remaining = orders.filter(order => order._id !== _id)
               
              setOrders(remaining)
             }
           })
         }

    return (
        <div>
            <h1>My orders{orders.length}</h1>
            <TableContainer component={Paper}>
      <Table className='table' sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Coustomer Name</TableCell>
            
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Watch</TableCell>
            <TableCell align="right">payment</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.customerName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{row.itemPrice}</TableCell>
              <TableCell align="right"><Button onClick={()=>handleOrderDelete(row._id)}>Delete </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Myorders;