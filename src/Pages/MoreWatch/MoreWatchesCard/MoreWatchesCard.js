import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';



const MoreWatchesCard = ({watch}) => {
    const {name , key ,img ,brand ,shop , price ,mainPrice ,discount} = watch
    const url = `/details/${key}`
    console.log(watch)
    return (
        <div>
           <div className="product-card">
		<div className="badge">{discount}</div>
		<div className="product-tumb">
			<img style={{height:300}} src={img} alt=""/>
		</div>
		<div className="product-details">
			<span className="product-catagory">{shop}</span>
			<h4><a href="/">{brand}</a></h4>
			<p>{name}</p>
			<div className="product-bottom-details">
				<div className="product-price"><small>${mainPrice}</small>${price}</div>
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

export default MoreWatchesCard;