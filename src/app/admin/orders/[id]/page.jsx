import { orderData } from '@/Data/orderData';
import { productsData } from '@/Data/products';
import React from 'react';

const page = () => {
    return (
        <div className='grid p-5 grid-cols-2'>
            <div className='border-r h-[600px] pr-5'>
                <h2 className='font-semibold text-2xl '> Ordered Items</h2>

                <div className='space-y-3 mt-5'>
                    {
                        orderData[0]?.orderedProducts.map(item => <div className='flex  justify-between'>
                            <div className='flex  gap-3'>
                                <img src={item.imageUrl} className='w-16 h-16 ' alt="" />

                                <div>
                                    <h2 className='text-lg'>{item.name}</h2>
                                    <h2 className='font-semibold'>x {4}</h2>
                                </div>
                            </div>


                            <div>
                                $ {item.price}
                            </div>
                        </div>)
                    }


                </div>
            </div>
            <div className='px-5'>
                <div>
                    <h2 className='font-semibold text-2xl '> Order Details</h2>

                    <div className="grid mt-5 grid-cols-[200px_1fr]">
                        <h2 className='font-semibold'>Total Price</h2>
                        <p className='text-lg'> <span className='font-semibold '>:</span> $40111</p>
                        <h2 className='font-semibold'>Discount</h2>
                        <p className='text-lg'> <span className='font-semibold '>:</span> $0</p>
                        <h2 className='font-semibold'>Payment Method</h2>
                        <p className='text-lg'> <span className='font-semibold '>:</span> {orderData?.[0].orderedDate}</p>
                        <h2 className='font-semibold'>Order Date</h2>
                        <p className='text-lg'> <span className='font-semibold '>:</span> {orderData?.[0].orderedDate}</p>
                        <h2 className='font-semibold'>Payment Status</h2>
                        <p className='text-lg'> <span className='font-semibold '>:</span> {orderData?.[0].paymentStatus}</p>
                        <h2 className='font-semibold'>Order Status</h2>
                        <p className='text-lg'> <span className='font-semibold '>:</span> {orderData?.[0].paymentStatus}</p>
                    </div>
                </div>
                <div className='mt-10'>
                    <h2 className='font-semibold text-2xl '> Customer Details</h2>

                    <div className="grid mt-5 grid-cols-[200px_1fr]">
                        <h2 className='font-semibold'>Namd</h2>
                        <p className='text-lg'> <span className='font-semibold '>:</span> {orderData?.[0].name}</p>
                        <h2 className='font-semibold'>Email</h2>
                        <p className='text-lg'> <span className='font-semibold '>:</span> $0</p>
                        <h2 className='font-semibold'>Phone</h2>
                        <p className='text-lg'> <span className='font-semibold '>:</span> {orderData?.[0].phoneNumber}</p>
                        <h2 className='font-semibold'>Address</h2>
                        <p className='text-lg'> <span className='font-semibold '>:</span> {orderData?.[0].orderedDate}</p>
                        <h2 className='font-semibold'>Company Name</h2>
                        <p className='text-lg'> <span className='font-semibold '>:</span> {orderData?.[0].paymentStatus}</p>
                        <h2 className='font-semibold'>Appartment/floor</h2>
                        <p className='text-lg'> <span className='font-semibold '>:</span> {orderData?.[0].paymentStatus}</p>
                    </div>
                </div>



                <button className='btn btn-neutral mt-10 w-full'>Complete Order</button>

            </div>



        </div>
    );
};

export default page;