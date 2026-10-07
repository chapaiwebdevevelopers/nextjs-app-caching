import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
      const { id, title, author, category, price, rating, shortdescription,image} =
            book;
      return (
            <div className="card bg-base-100 w-full max-w-sm shadow-xl border border-base-200">
                  {/* Image */}
                  <figure>
                        <Image src={image} alt={title} width={600} height={600}
                              className="w-full h-64 object-cover"></Image>
                  </figure>
                  {/* Content */}
                  <div className="card-body">
                        <div className="flex justify-between items-center">
                              <div className="badge badge-primary">
                                    {category}
                              </div>
                              <span className="text-sm">⭐ {rating}</span>
                        </div>
                        <h2 className="card-title mt-2">{title}</h2>
                        <p className="text-sm text-base-content/70">
                              By {author}
                        </p>
                        <p className="text-sm">{shortdescription}</p>
                        <div className="flex justify-between items-center mt-3">
                              <span className="text-2xl font-bold">
                                    ৳{price}
                              </span>
                              <span className="text-xs text-base-content/50">
                                    Sku ID: {id}
                              </span>
                        </div>
                        <div className="card-actions mt-4">
                              <Link href={`./books/${id}`}>
                                    <button className="btn btn-primary w-full">
                                    View Details
                              </button>                              
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default BookCard;
