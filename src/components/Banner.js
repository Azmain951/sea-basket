import React from 'react';
import useData from '../hooks/useData';

const Banner = () => {
    const [data] = useData();
    return (
        <div className='container my-5 mx-auto'>
            <img src={data.banner} alt="" />
            <div className='text-center'>
                <h2 className='text-uppercase mb-5 fw-bold'>How it works</h2>
                <p>Sea Basket delivers fresh sourced seafood in a few easy clicks</p>
            </div>
        </div>
    );
};

export default Banner;