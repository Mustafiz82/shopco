import { productsData } from '@/Data/products';
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
        <th>Original Price</th>
        <th>Sell Price</th>
        <th>Rating</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      {
        productsData.map((item,index) =>   <tr className="hover:bg-base-300">
        <th>{index + 1}</th>
        <td className='flex gap-2'>
          <img src={item?.imageUrl} className='h-10 w-10' alt="" />
          <h2>{item.name}</h2>
        </td>
        <td>{item.originalPrice || item.price}</td>
        <td>{item.price}</td>
        <td>{item.rating}</td>
        <td><button className='btn btn-neutral'>Edit</button></td>
      </tr>)
      }
      {
        productsData.map((item,index) =>   <tr className="hover:bg-base-300">
        <th>{index + 1}</th>
        <td className='flex gap-2'>
          <img src={item?.imageUrl} className='h-10 w-10' alt="" />
          <h2>{item.name}</h2>
        </td>
        <td>{item.originalPrice || item.price}</td>
        <td>{item.price}</td>
        <td>{item.rating}</td>
        <td><button className='btn btn-neutral'>Edit</button></td>
      </tr>)
      }
     
    
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default page;