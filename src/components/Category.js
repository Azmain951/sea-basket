import React from 'react';
import useData from '../hooks/useData';

const Category = () => {
    const [data] = useData();
    return (
        <div className='container text-uppercase my-5' id='category'>
            <h3 className='text-center text-uppercase py-5'>Categories</h3>
            <div className='mx-auto grid row row-cols-1 row-cols-md-3 g-5'>
                {
                    data?.category?.map((item, index) =>
                        <div className="col" key={index}>
                            <div className="card shadow border-0" style={{ borderRadius: '30px' }}>
                                <img src={item.img} className="card-img-top px-5 pt-3" alt="..." height={120} />
                                <div className="card-body">
                                    <h5 className="card-text text-center">{item.name}</h5>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Category;