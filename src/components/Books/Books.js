import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css';





const Books = () => {

    const [books, setBooks] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(()=> {
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
        .catch(error => console.log(error))
    },[]);


    const addProduct = (book) => {
        setProduct([...product, book])
    };

   

    const removeProduct =(product) => {
          setProduct([]);
    }



    const randomProduct = (product) => {
       
        const randomItem = Math.random(product) * product.length;
        const fixedRandomItem = parseInt(randomItem);

        const total = product[fixedRandomItem];

        if(total === undefined){

            alert("please add to cart ")
        }

        setProduct([total]);
        // debugger;
        
    };

    


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 books-item">
                    {
                        books.map(book=> <Book 
                                            key={book.id} 
                                            book={book} 
                                            addProduct={addProduct}
                                        > </Book>)
                    }
                </div>
                <div className="col-md-4 text-center">
                    <div className="cart-container border">
                        
                        <Cart 
                        key={product.id}
                        product={product}
                        removeProduct={removeProduct}
                        randomProduct={randomProduct}
                        > </Cart>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Books;