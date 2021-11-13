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


const AllOrder = () => {
    const {user , deliveryReport,
        setDeliveryReport } = useAuth();
 

    const [orders , setOrders] = useState([])

    useEffect(()=>{
        const url =`http://localhost:5000/orders`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    
    
    
    const handleOrderStatus = (_id)=>{
        setDeliveryReport('approved')
        const newStatus = {report:deliveryReport}
        fetch(`http://localhost:5000/orders/${_id}` , {
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newStatus)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
     }
    const handleOrderDelete = (_id) =>{
           console.log(_id)
           const url=`http://localhost:5000/orders/${_id}`
           fetch(url, {
             method:'DELETE'
           })
           .then(res => res.json())
           .then(data=>{
             if(data.deletedCount>0){
              
               alert('delete')
            
               const remaining = orders.filter(order => order._id !== _id)
               
              setOrders(remaining)
             }
           })
         }


       

    return (
        <div>
            <h1>Total Order {orders.length}</h1>
            <TableContainer component={Paper}>
      <Table className='table' sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Coustomer Name</TableCell>
            
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Watch</TableCell>
            <TableCell align="right">payment</TableCell>
            <TableCell align="right">Delivery Report</TableCell>
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
              <TableCell align="right"><Button onClick={()=>handleOrderStatus(row._id)}>Aprrove</Button></TableCell>
              <TableCell align="right"><Button onClick={()=>handleOrderDelete(row._id)}>Delete </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default AllOrder;