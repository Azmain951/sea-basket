import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
import Category from './Category';
import FAQs from './FAQs';
import Footer from './Footer';
import Product from './Product';
import Topics from './Topics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Product></Product>
            <FAQs></FAQs>
            <Blog></Blog>
            <Topics></Topics>
            <Footer></Footer>
        </div>
    );
};

export default Home;