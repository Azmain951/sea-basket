import React from 'react';
import useData from '../hooks/useData';

const Product = () => {
    const [data] = useData();
    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-center pt-5'>A GLANCE AT OUR PRODUCT</h2>
            <div className='mt-5'>
                <img src={data.thumbnail} alt="" className='img-fluid' />
            </div>
        </div>
    );
};

export default Product;