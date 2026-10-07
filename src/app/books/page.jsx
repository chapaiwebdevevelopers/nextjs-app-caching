import React from 'react';
import BookCard from '../components/BookCard';
import { connection } from 'next/server';
import { getBooks } from '@/lib/catalog';

const BooksPage = async() => {
    await connection();
    const books = await getBooks();
    return (
        <div className='container mx-auto'>
            <marquee>This page uses cached book data from Netlify Database.</marquee>
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
