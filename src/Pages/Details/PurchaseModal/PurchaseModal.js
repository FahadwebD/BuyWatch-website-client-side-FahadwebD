

import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PurchaseModal = ({detail ,  openPurchase, handlePurchaseClose}) => {
    
    const {name,price,key} = detail;
    console.log(detail)
    const{user ,deliveryReport} = useAuth();
    
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);
   

 const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        console.log(orderInfo)
        setOrderInfo(newInfo);
    }
    const handleBookingSubmit = e => {
       
        const ordered = {
            ...orderInfo,
           
            item: name,
            itemId:key,
            itemPrice:price,
            report:'pending'
          
        }

        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(ordered)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data)
        })
        
        handlePurchaseClose();
        e.preventDefault();
    }

    
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openPurchase}
        onClose={handlePurchaseClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
    >
         <Fade in={openPurchase}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                           
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={price}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="customerName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                           
                            label="Read Only"
                            defaultValue={user.email}
                            InputProps={{
                              readOnly: true,
                            }}
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={name}
                            size="small"
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default PurchaseModal;