import React from 'react';
import useData from '../hooks/useData';

const Footer = () => {
    const [data] = useData();
    return (
        <div className='bg-primary py-3 px-5 text-white'>
            <div className='container d-block d-lg-flex my-5'>
                <div className='w-50 mx-auto'>
                    <img src={data?.logo} alt="" />
                </div>
                <div className='mx-auto mt-4 mt-lg-0 d-flex justify-content-around align-item-center w-50'>
                    <div className='d-flex flex-column me-5 me-lg-0'>
                        <a className='text-white mb-3 text-decoration-none' href="">About Us</a>
                        <a className='text-white mb-3 text-decoration-none' href="">Privacy Policy</a>
                        <a className='text-white mb-3 text-decoration-none' href="">Support Us</a>
                    </div>
                    <div className='d-flex flex-column'>
                        <a className='text-white mb-3 text-decoration-none' href="">Terms & Conditions</a>
                        <a className='text-white mb-3 text-decoration-none' href="">Refund & Return Policy</a>
                        <a className='text-white mb-3 text-decoration-none' href="">Shipping & Delivery Policy</a>
                    </div>
                </div>

            </div>
            <p className='text-center'>Sea Basket I All Rights Reserved I 2021 Copyright</p>
        </div>
    );
};

export default Footer;