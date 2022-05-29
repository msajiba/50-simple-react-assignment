import React from 'react';
import CartTitle from '../CartTitle/CartTitle';
import './Cart.css';

const Cart = (props) => {

    const {product, removeProduct, randomProduct } = props;

    return (
        <div className='cart-container'>
            <h3> Cart Section {product.length} </h3>
            {
                product.map(item=> <CartTitle key={item.id} item={item}> </CartTitle> )
            }

                <div className="row outside-button">
                     <button 
                            onClick={()=> randomProduct(product)}
                            className="btn btn-success">CHOOSE 1 FOR ME</button>
                     <button 
                            onClick={()=> removeProduct(product)}
                            className="btn btn-danger mt-2">CHOOSE AGAIN</button>
                </div>
        </div>
    );
};

export default Cart;