import Image from 'next/image';
import React from 'react';

const ProductCard = ({product}) => {
    
   const {id , productName , category,shortDescription,price,image,rating, stock} = product;
    return (
<div className="max-w-md mx-auto my-10">
  <article className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden">

    {/* Product Image */}
    <figure>
      <Image
        src={image}
        alt={productName}
        width={600}
        height={400}
        className="w-full h-80 object-cover"
      />
    </figure>

    {/* Product Details */}
    <div className="card-body">
      <h2 className="card-title">
        {productName}
      </h2>

      <p className="text-base-content/70">
        {shortDescription}
      </p>

      <div className="flex items-center justify-between mt-3">
        <span className="text-2xl font-bold">
          ${price}
        </span>

        <div className="badge badge-primary">
          {category}
        </div>
      </div>

      <div className="card-actions justify-end mt-4">
        <button className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>

  </article>
</div>
    );
};

export default ProductCard;