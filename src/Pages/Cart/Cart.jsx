import React from 'react'
import './Cart.css'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/DataProvider.jsx/DataProvider.jsx'
import ProductCard from '../../Components/Product/ProductCard.jsx';
import CurrencyFormate from '../../Components/CurrencyFormat/CurrencyFormate.jsx';
import { Link } from 'react-router-dom';
import { Type } from '../../Utility/action.type.js';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
    const [{basket, user}, dispatch] = React.useContext(DataContext);
    const total = basket.reduce((amount, item)=>{
        return item.price * item.amount + amount;
    }, 0)
    
    const increment = (item) => {
        dispatch({
            type: Type.ADD_TO_BASKET,
            item: item
        })
    }

    const decrement = (id) => {
        dispatch({
            type: Type.REMOVE_FROM_BASKET,
            id: id
        })
    }


    return (
        <Layout>
            <section className='container'>
                <div className='cart_container'>
                    <h2>Hello</h2>
                    <h3>Your shopping basket</h3>
                    <hr />
                    {
                        basket?.length == 0? (<p>Opps! No item in your cart</p>):(
                            basket?.map((item, i) => {
                                return <section className='cart_product'> 

                                <ProductCard 
                                    product={item}
                                    renderDesc={true}
                                    flex={true}
                                    renderAdd={false}
                                    key={i} 
                                />
                                <div className='btn_container'>
                                    <button className='btn' onClick={()=>increment(item)}>
                                    <IoIosArrowUp size={20}/> </button>
                                    <span>{item.amount}</span>
                                    <button className='btn' onClick={()=>decrement(item.id)}><IoIosArrowDown size={20} /></button>

                                </div>
                                </section>
                            })
                        )
                    }
                </div>

                {basket?.length !== 0 && (
                    <div className='subtotal'>
                        <div>
                            <p>Subtotal ({basket?.length} item)</p>
                            <CurrencyFormate amount={total} />
                        </div>
                        <span>
                            <input type="checkbox" />
                            <small>This order contains a gift</small>
                        </span>
                        <Link to="/payments">Continue to checkout</Link>
                    </div>
                )}

                
            </section>
        </Layout>
        
    )
}

export default Cart
