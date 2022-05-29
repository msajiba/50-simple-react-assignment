import React from 'react';
import './Book.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'




const Book = (props) => {

    const {name, price,img} = props.book;

    return (
        <div>
            <div className="row">
                <div className="col border text-center books-items-container">
                    <img className='book-img' src={img} alt="" />
                    <div className="text-center">
                        <h5 className='mt-2 mb-2'> {name} </h5>
                        <p className='mb-5'> <small> {price} </small> </p>
                        <button 
                             className="btn btn-danger add-button">
                             add book 
                             <FontAwesomeIcon className='icon' icon={faArrowAltCircleRight} />    
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;