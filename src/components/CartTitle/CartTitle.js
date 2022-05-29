import React from 'react';
import './CartTitle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartTitle = (props) => {

    const { img, name } = props.item;

    
    return (
        <div>
            <div className="row text-center mt-2 ">
                <div className="col-md-3 image-part  mb-2">
                    <img className="rounded-circle border" src={img} alt="" />
                </div>
                <div className="col-md-5 title-part mb-2 pt-1">
                    <p>{name}</p>
                </div>
                <div className="col-md-4 button-part">
                    <button className="btn btn-icon"> <FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
        </div>
    );
};

export default CartTitle;