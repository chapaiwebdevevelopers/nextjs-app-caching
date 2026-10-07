import React from 'react';
import ProductCard from '../components/ProductCard';
import { connection } from 'next/server';
import { getProducts } from '@/lib/catalog';

const getProductsPage = async() => {
    await connection();
    const products = await getProducts();
    return (
        <div className='container mx-auto'>
            <marquee>This page uses Netlify Database with product data cached for 20 seconds.</marquee>
            <h2>Total Product : {products.length}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3'>
                {
                    products.map(product=>
                        <ProductCard key={product.id} product={product}></ProductCard>
                    )
                }
            </div>
        </div>
    );
};

export default getProductsPage;
