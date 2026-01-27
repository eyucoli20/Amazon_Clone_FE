import React, { useEffect, useState } from 'react'
import './Result.css'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'

function Result() {
    const[results, setResults] = useState([]);
    const {categoryName} = useParams()
    const [isLoading, setIsLoading] = useState(false)

    const categoryMap = {
        "mens-clothing": "men's clothing",
        "womens-clothing": "women's clothing",
        "electronics": "electronics", 
        "jewelery": "jewelery"
    };

    useEffect(() => {
        if (categoryName) {
            // Convert URL param with dashes back to spaces for API lookup
            const apiCategoryName = categoryMap[categoryName] || categoryName.replace(/-/g, ' ');
            setIsLoading(true);
            axios.get(`${productUrl}/products/category/${encodeURIComponent(apiCategoryName)}`)
                .then((res)=> {
                    setResults(res.data);
                    setIsLoading(false);
                })
                .catch((err)=> {
                    console.log("API error:",err);
                    setIsLoading(false);
                })
        }
    }, [categoryName]);
    
    return (
        <Layout>
            <section>
                <h1 style={{padding: "30px"}}>Results</h1>
                <p style={{padding: "30px"}}>Category / {categoryName}</p>
                <hr />

                {isLoading ? (
                        <Loader />
                    ) : (
                        <div className='products__container'>
                            {results.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    renderAdd={true}
                                    product={product} 
                                />
                                ) )}
                        </div>
                )} 
            </section>  
        </Layout>
    );
};

export default Result
