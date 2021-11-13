
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
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
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {feedBack}
        </Typography>
        <Typography variant="h5" component="div">
        <Rating name="read-only" value={rating} readOnly />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {feedBack}
        </Typography>
      </CardContent>
    </Card>
            </Container>
        </div>
    );
};

export default ReviewCard;