import React from 'react';
import useData from '../hooks/useData';

const Topics = () => {
    const [data] = useData();
    return (
        <div className='container my-5'>
            <h2 className='text-center text-uppercase'>Topics you can't miss</h2>
            {
                data?.topics?.map((item, index) =>
                    <div key={index} className='d-flex my-5 bg-white shadow-sm' style={{ borderRadius: '30px' }}>
                        <div className='w-50 d-flex justify-content-center align-items-center'>
                            <div className="ps-5">
                                <h5 className="fw-bold mb-5 text-uppercase">{item?.heading}</h5>
                                <p className="mb-5">{item?.details}</p>
                                <a href="#" className="btn btn-link p-0 m-0">Read More</a>
                            </div>
                        </div>
                        <div className='w-50'>
                            <img src={item?.img} alt="" className='img-fluid' />
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Topics;