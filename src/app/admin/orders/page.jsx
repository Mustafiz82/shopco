import { orderData } from '@/Data/orderData';
import Link from 'next/link';
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
               <th>Date</th>
               <th>Ordered By</th>
               <th>Price</th>
               <th>Order ID</th>
               <th>Payment Method</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
       
             {
               orderData.map((item,index) =>   <tr className="hover:bg-base-300">
               <th>{index + 1}</th>
               <td className='flex gap-2'>
                     {item.orderedDate}
               </td>
               <td>{item.name}</td>
               <td>{item.totalPrice}</td>
               <td>{5485384354484152}</td>
               <td>{item.pamentMethod}</td>
               <td> <Link href={"/admin/orders/54874"} className='btn btn-neutral'>View Order</Link></td>
             </tr>)
             }
         
            
           
           
            
           </tbody>
         </table>
       </div>
               </div>
    );
};

export default page;