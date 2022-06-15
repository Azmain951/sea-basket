import React from 'react';
import useData from '../hooks/useData';

const AdminPanel = () => {
    const [data] = useData();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }
    return (
        <div className='container my-5'>
            <div className='row row-cols-4 g-2'>
                <div class="col card">
                    <img src={data?.banner} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Banner Image</h5>
                        <form onSubmit={handleSubmit}>
                            <input className='mb-2' type="text" name='banner' placeholder='image link' defaultValue={data.banner} />
                            <input type='Submit' value='Update Image' class="btn btn-primary"></input>
                        </form>
                    </div>
                </div>
                <div class="col card">
                    <img src={data?.thumbnail} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Video Thumbnail Image</h5>
                        <form onSubmit={handleSubmit}>
                            <input className='mb-2' type="text" name='thumbnail' placeholder='image link' defaultValue={data.thumbnail} />
                            <input type='Submit' value='Update Image' class="btn btn-primary"></input>
                        </form>
                    </div>
                </div>
                {
                    data?.topics?.map((item, index) =>
                        <div key={index} class="col card">
                            <img src={item?.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Video Thumbnail Image</h5>
                                <form onSubmit={handleSubmit}>
                                    <input className='mb-2' type="text" name={`topics${index}`} placeholder='image link' defaultValue={item.img} />
                                    <input type='Submit' value='Update Image' class="btn btn-primary"></input>
                                </form>
                            </div>
                        </div>)
                }
            </div>
            <div className='row row-cols-3 my-5'>
                {
                    data?.category?.map((item, index) =>
                        <div key={index} class="col card">
                            <img src={item?.img} class="card-img-top p-5" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Category {index + 1}</h5>
                                <form onSubmit={handleSubmit}>
                                    <input className='mb-2' type="text" name={`categoryImg${index}`} placeholder='Category Image Link' defaultValue={item.img} />
                                    <input className='mb-2' type="text" name={`categoryTitle${index}`} placeholder='Category Name' defaultValue={item.name} />
                                    <input type='Submit' value='Update Category' class="btn btn-primary"></input>
                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AdminPanel;