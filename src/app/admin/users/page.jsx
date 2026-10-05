import { users } from '@/Data/userData';
import React from 'react';

const page = () => {
    return (
     <div>
             <div className=" h-screen overflow-x-auto">
      <table className="table table-pin-rows">
        {/* head */}
        <thead>
          <tr className='bg-zinc-500 text-white'>
            <th>Sn</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        
          
            {
                users?.map((item , index) => <tr className=''>
            <th>{index}</th>
            <th>{item.name}</th>
            <th>{item.email}</th>
            <th><button className='btn btn-neutral'>Make Admin</button></th>
          </tr>)
            }
        
         
        </tbody>
      </table>
    </div>
            </div>
    );
};

export default page;