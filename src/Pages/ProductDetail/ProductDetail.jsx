import React, { useEffect, useState} from 'react'
import './ProductDetail.css'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'

function ProductDetail() {
    const {productId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${productUrl}/products/${productId}`)
        .then((res)=> {
            setProduct(res.data);
            setIsLoading(false);
        }).catch((err)=> {
            console.log("API error:",err)
            setIsLoading(false);
        })
    }, [productId])

    return (
            <Layout>
                {isLoading ? <Loader /> : 
                (<ProductCard product={product}
                flex = {true} 
                renderDesc = {true} 
                renderAdd={true}     
                />)}
            </Layout> 
        )
}
export default ProductDetail
