import UpToDate from '@/components/Home/UpToDate';
import ProductClients from '@/components/product/ProductClients';
import React from 'react';

const page = () => {
    return (
        <div>
            <ProductClients/>
            <UpToDate/>
        </div>
    );
};

export default page;