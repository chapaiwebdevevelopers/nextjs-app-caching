import React from 'react';
import ProductCard from '../components/ProductCard';



const getProducts =async ()=>{
    const res = await fetch('http://localhost:5000/products',
        { next:{
            revalidate:20
        }
            

        });
    return res.json();
}

const getProductsPage = async() => {
    const products = await getProducts();
    return (
        <div className='container mx-auto'>
            <marquee>This page is generated using cached data from the server every 20 seconds --- ISR= Incremental Static Regeneration</marquee>
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