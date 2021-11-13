import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
const Reviews = () => {
    const [valueRating, setValueRating] = React.useState(1);
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
 

    

    const addReview = ()=>{
        const review = {feedBack:value , rating:valueRating};
        fetch('http://localhost:5000/reviews/add' , {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('success')
               
               
            }
        })
    }

    console.log(value , valueRating)
    return (
        <div>
             <Box>
         <div>
        
           <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
            setValueRating(newValue);
        }}
      />
         </div>
           <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          
          onChange={handleChange}
        />
        <Button onClick={addReview}>Add Your Feed Back</Button>
           </Box>
        </div>
    );
};

export default Reviews;