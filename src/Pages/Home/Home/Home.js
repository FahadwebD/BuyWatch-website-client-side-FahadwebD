import React from 'react';
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
        </div>
    );
};

export default Home;