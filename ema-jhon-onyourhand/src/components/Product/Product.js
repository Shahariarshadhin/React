import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    const { name, img, seller, price, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='produt-name'>{name}</p>
                <p className='produt-price'>Price :${price}</p>
                <p className='produt-seller'><small>Seller :{seller}</small></p>
                <p className='produt-ratings'><small>Ratings :{ratings} Stars</small></p>
            </div>
            <button onClick={() => props.handleAddToClick(props.product)} className='btn-cart' >
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;