import React from 'react';
import useData from '../hooks/useData';

const Category = () => {
    const [data] = useData();
    console.log(data.category)
    return (
        <div className='container mx-auto grid row row-cols-1 row-cols-md-3 g-5'>
            {
                data?.category?.map(item =>
                    <div class="col">
                        <div class="card">
                            <img src={item.img} class="card-img-top p-5" alt="..." width={50} height={200} />
                            <div class="card-body">
                                <h3 class="card-text">{item.name}</h3>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Category;