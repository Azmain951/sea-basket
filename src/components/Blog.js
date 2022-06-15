import React from 'react';
import useData from '../hooks/useData';
import { MdKeyboardArrowRight } from "react-icons/md";

const Blog = () => {
    const [data] = useData();
    return (
        <div className='container my-5' id='blog'>
            <h2 className='text-center text-uppercase'>Have a Read</h2>
            <div className='mt-5'>
                {
                    data?.blog?.map((item, index) =>
                        <div className="card mb-5 p-4 shadow-sm border-0" key={index} style={{ borderRadius: '30px' }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-4">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <div className='pb-4'>
                                    <a href="#" className="btn btn-link fs-5 pe-5 text-decoration-none position-absolute end-0 d-flex jusitfy-content-center align-items-center"><span>Read More</span> <span><MdKeyboardArrowRight></MdKeyboardArrowRight></span></a>
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Blog;