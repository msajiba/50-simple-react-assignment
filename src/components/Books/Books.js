import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css';





const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=> {
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
        .catch(error => console.log(error))
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9 books-item">
                    {
                        books.map(book=> <Book key={book.id} book={book}> </Book>)
                    }
                </div>
                <div className="col-md-3">
                    <h3>Cart section </h3>
                </div>
            </div>
        </div>
    );
};

export default Books;