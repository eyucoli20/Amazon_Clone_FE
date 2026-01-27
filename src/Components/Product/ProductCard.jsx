import React from 'react'
import './Product.css'
import { Rating } from '@mui/material'
import CurrencyFormate from '../CurrencyFormat/CurrencyFormate'
import { Link } from 'react-router-dom'

function ProductCard({product, flex, renderDesc}) {
    
    if (!product || !product.id) return null;

    const {image, title, id, rating, price, description} = product;

    return (
        <div className={`${'card__container'} ${flex?'product__flexed' : ''}`}>
            <Link to = {`/products/${id}`}>
                <img src={image} alt="" className= 'img_container'/>
            </Link>
            <div>   
                <h3>{title}</h3>
                {renderDesc && <div style={{maxWidth: '750px'}}>{description}</div>}
                <div className='rating'>
                    <Rating value={rating?.rate || 0} precision={0.1} readOnly />
                    <small>({rating?.rate})</small>
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
