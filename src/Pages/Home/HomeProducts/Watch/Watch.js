import React, { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Watch.css'
import { Link } from 'react-router-dom';

const Watch = ({watch}) => {
 
    
    const {name , id} = watch
    const url = `/details/${id}`
  

    return (
        <div>
            	<div className="product-card">
		<div className="badge">Hot</div>
		<div className="product-tumb">
			<img style={{height:300}} src="https://pngimg.com/uploads/watches/watches_PNG9868.png" alt=""/>
		</div>
		<div className="product-details">
			<span className="product-catagory">Men,Watch</span>
			<h4><a href="/">{name}</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div className="product-bottom-details">
				<div className="product-price"><small>$96.00</small>$230.99</div>
				<div className="product-links">
                <a href="/"><i className="fa fa-heart"><FavoriteIcon/></i></a>
                <Link to={url}> <i className="fa fa-shopping-cart"><ShoppingCartIcon/></i> </Link>
					
					
				</div>
			</div>
		</div>
	</div>
        </div>
    );
};

export default Watch;