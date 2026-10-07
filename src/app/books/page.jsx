import React from 'react';
import BookCard from '../components/BookCard';
const getBooks = async()=> {
    const res = await fetch('http://localhost:5000/books',{cache:'force-cache'});
    if(! res.ok){
        throw new Error("Failed to fetch book Data")
    }
    return res.json();
}
const BooksPage = async() => {
    const books = await getBooks();
    return (
        <div className='container mx-auto'>
            <marquee> <span className='text-red-500'>Wait 10 Second</span>This page is generated using cached data from the server and Refresed it in each 10 seconds</marquee>
            <h2 className='text-4xl my-10 mx-auto'>Total Books :{books.length}  </h2>
            <div className= ' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    books.map(book =>
                        <BookCard key={book.id} book={book}></BookCard>
                    )
                }
            </div>
            
        </div>
        
    );
};

export default BooksPage;