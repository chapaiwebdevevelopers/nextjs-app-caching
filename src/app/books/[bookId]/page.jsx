import Image from "next/image";
import React from "react";

 // Generate 4 files index 0 to 3 which pre Generated for Loading Faster and better performance
export const generateStaticParams= async()=>{
      const res = await fetch('http://localhost:5000/books');
      const books = await res.json();
      // Slice indicate the how many files
      return books.slice(0,3).map(book=>({
            bookId:book.id
      }))
}
const BookDetailsPage = async ({ params }) => {
      const { bookId } = await params;
      console.log("book", bookId);
      const res = await fetch(`http://localhost:5000/books/${bookId}`);
      const book = await res.json();
      const {title,author,category,price,rating,shortdescription,description,image} = book;

      return (
            <div>
                  <h3>Show Here Single Book Details Dynamic</h3>
                  <div className="max-w-5xl mx-auto my-10 px-4">
                        <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">
                              {/* Book Image */}
                              <figure className="lg:w-1/2">
                                    <Image
                                    width={600}
                                    height={600}
                                          src={image}
                                          alt={title}
                                          className="w-full h-full min-h-[400px] object-cover"
                                    />
                              </figure>

                              {/* Book Content */}
                              <div className="card-body lg:w-1/2">
                                    {/* Category */}
                                    <div>
                                          <div className="badge badge-primary">
                                                {category}
                                          </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="card-title text-3xl font-bold mt-2">
                                          {title}
                                    </h2>

                                    {/* Author */}
                                    <p className="text-base-content/70">
                                          By{" "}
                                          <span className="font-semibold">
                                                {author}
                                          </span>
                                    </p>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mt-2">
                                          <div className="rating rating-sm">
                                                <input
                                                      type="radio"
                                                      className="mask mask-star-2 bg-orange-400"
                                                      checked
                                                      readOnly
                                                />
                                          </div>

                                          <span className="font-semibold">
                                                {rating}
                                          </span>
                                          <span className="text-base-content/60">
                                                / 5
                                          </span>
                                    </div>

                                    {/* Short Description */}
                                    <p className="text-lg font-medium mt-4">
                                          {shortdescription}
                                    </p>

                                    {/* Full Description */}
                                    <p className="text-base-content/70 leading-7">
                                          {description}
                                    </p>

                                    {/* Price */}
                                    <div className="mt-4">
                                          <span className="text-3xl font-bold">
                                                ৳{price}
                                          </span>
                                    </div>

                                    {/* Buttons */}
                                    <div className="card-actions mt-6">
                                          <button className="btn btn-primary">
                                                Buy Now
                                          </button>

                                          <button className="btn btn-outline">
                                                Add to Cart
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default BookDetailsPage;
