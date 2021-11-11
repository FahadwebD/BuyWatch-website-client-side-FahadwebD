import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PurchaseModal from '../PurchaseModal/PurchaseModal'
import { Button, CircularProgress, Container } from '@mui/material';


  





const SingleDetail = ({detail}) => {
  const theme = useTheme();
  const [openPurchase, setPurchaseOpen] = React.useState(false);
  const handlePurchaseOpen = () => setPurchaseOpen(true);
  const handlePurchaseClose = () => setPurchaseOpen(false);

    console.log(detail)
    return (
      <>
        <Container>
        {detail?<Card sx={{ display: 'flex' ,alignItems: 'center' , justifyContent:'center' , marginTop:'200px'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' ,alignItems: 'center' , justifyContent:'center' }}>
        <CardContent sx={{ flex: '1 0 0' }}>
          <Typography component="div" variant="h5">
            {detail.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {detail.brand}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button onClick={handlePurchaseOpen} sx={{backgroundColor:'#fbb72c' , color:'black'}}>Buy Now</Button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={detail.img}
        alt="Live from space album cover"
      />
    </Card>:<CircularProgress></CircularProgress>}
        </Container>
   <PurchaseModal
  
   detail={detail}
   openPurchase={openPurchase}
   handlePurchaseClose={handlePurchaseClose}
   
   ></PurchaseModal>
    </>
    );
};

export default SingleDetail;