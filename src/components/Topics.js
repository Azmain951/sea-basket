import React from 'react';
import useData from '../hooks/useData';
import { MdKeyboardArrowRight } from "react-icons/md";

const Topics = () => {
    const [data] = useData();
    return (
        <div className='container my-5'>
            <h2 className='text-center text-uppercase'>Topics you can't miss</h2>
            {
                data?.topics?.map((item, index) =>
                    <div key={index} className='row row-cols-1 row-cols-lg-2 my-5 bg-white shadow-sm' style={{ borderRadius: '30px' }}>
                        <div className='col my-5 m-lg-0 p-0 d-flex justify-content-center align-items-center'>
                            <div className="ps-5">
                                <h5 className="fw-bold mb-5 text-uppercase">{item?.heading}</h5>
                                <p className="mb-5">{item?.details}</p>
                                <a href="#" className="btn btn-link p-0 m-0 fs-5 text-decoration-none d-flex jusitfy-content-center align-items-center"><span>Read More</span> <span><MdKeyboardArrowRight></MdKeyboardArrowRight></span></a>
                            </div>
                        </div>
                        <div className='col m-0 p-0'>
                            <img src={item?.img} alt="" className='img-fluid' />
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Topics;