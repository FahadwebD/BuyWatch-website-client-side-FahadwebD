
import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

import Rating from '@mui/material/Rating';

const ReviewCard = ({r}) => {
    const {feedBack , rating} = r;
   
    return (
        <div>
            <Container>
            <Card sx={{ minWidth: 200 , margin:5 }}>
      <CardContent>
      
        <Typography variant="h5" component="div">
        <Rating name="read-only" value={rating} readOnly sx={{color:'gold'}}/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         " {feedBack}"
        </Typography>
      </CardContent>
    </Card>
            </Container>
        </div>
    );
};

export default ReviewCard;