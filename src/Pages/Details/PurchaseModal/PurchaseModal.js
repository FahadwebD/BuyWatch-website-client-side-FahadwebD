

import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




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
    const {name ,mainprice ,id} = detail
    const initialInfo = { coustomerName: "fahad", email: "fahad64@", phone: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);

  
 const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }
    const handleBookingSubmit = e => {
        // collect data
        const ordered = {
            ...orderInfo,
           
            item: name,
            itemId:id,
          
        }
        console.log(ordered)
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
                    {detail.name}
                </Typography>
                <form  onSubmit={handleBookingSubmit} >
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue={mainprice}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="coustomerName"
                        onBlur={handleOnBlur}
                        
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="email"
                  
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="phone"
                     
                        defaultValue="Phone Number"
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue='sd'
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