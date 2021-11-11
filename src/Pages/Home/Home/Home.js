import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

import Watches from '../HomeProducts/Watches/Watches';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Categories></Categories>
            <Watches></Watches>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;