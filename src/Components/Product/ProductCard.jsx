import React from 'react'
import './Product.css'
import { Rating } from '@mui/material'
import CurrencyFormate from '../CurrencyFormat/CurrencyFormate'


function ProductCard({product}) {
    
    const {image, title, rating, price} = product;

    return (
        <div className={`card__container`}>
            <a href="">
                <img src={image} alt=""/>
            </a>
            <div>
                <h3>{title}</h3>
                <div className='rating'>
                    <Rating value={rating} precision={0.1} />
                    <small>{rating.count}</small>
                </div>
                <div>
                    <CurrencyFormate amount={price}/>
                    <button className='button'>
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
