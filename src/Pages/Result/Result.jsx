import React, { useEffect, useState } from 'react'
import './Result.css'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'

function Result() {
    const[results, setResults] = useState([]);
    const {categoryName} = useParams()

    const categoryMap = {
        "mens-clothing": "men's clothing",
        "womens-clothing": "women's clothing",
        "electronics": "electronics", 
        "jewelery": "jewelery"
    };

//     useEffect(() => {
//     if (categoryName) {
//         axios.get(`${productUrl}/products/category/${categoryName}`)
//         .then((res) => setResults(res.data))
//         .catch((err) => console.log("API error:", err));
//     }
// }, [categoryName]);

    useEffect(() => {
        if (categoryName) {
            // Convert URL param with dashes back to spaces for API lookup
            const apiCategoryName = categoryMap[categoryName] || categoryName.replace(/-/g, ' ');
            axios.get(`${productUrl}/products/category/${encodeURIComponent(apiCategoryName)}`)
                .then((res)=> setResults(res.data))
                .catch((err)=> console.log("API error:",err)) 
        }
    }, [categoryName]);
    
    return (
        <Layout>
            <section>
                <h1 style={{padding: "30px"}}>Results</h1>
                <p style={{padding: "30px"}}>Category / {categoryName}</p>
                <hr />
                <div className='products__container'>
                    {results?.length > 0 ? (
                        results.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product} 
                        />
                        )) 
                    ) : (
                        <p>No prodcts found in this category.</p>
                    )}
                </div>
            </section>  
        </Layout>
    )
}

export default Result
