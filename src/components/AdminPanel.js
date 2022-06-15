import React from 'react';
import useData from '../hooks/useData';

const AdminPanel = () => {
    const [data] = useData();
    return (
        <div>
            <div className='row row-cols-4'>
                <div class="col card">
                    <img src={data?.banner} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Banner Image</h5>
                        <input type="text" placeholder='image link' />
                        <button href="#" class="btn btn-primary">Update Image</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default AdminPanel;