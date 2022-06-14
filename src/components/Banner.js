import React from 'react';
import useData from '../hooks/useData';

const Banner = () => {
    const [data] = useData();
    return (
        <div className='my-5'>
            <img src={data.banner} alt="" />
        </div>
    );
};

export default Banner;