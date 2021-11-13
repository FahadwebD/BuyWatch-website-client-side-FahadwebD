import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

import Watches from '../HomeProducts/Watches/Watches';
import GetReviews from '../UserReviews/GetReviews/GetReviews';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Categories></Categories>
            <Watches></Watches>
            <GetReviews></GetReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;