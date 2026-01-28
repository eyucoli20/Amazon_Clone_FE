import React from 'react'
import './Cart.css'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/DataProvider.jsx/DataProvider.jsx'
import ProductCard from '../../Components/Product/ProductCard.jsx';
import CurrencyFormate from '../../Components/CurrencyFormat/CurrencyFormate.jsx';
import { Link } from 'react-router-dom';

function Cart() {
    const [{basket, user}, dispatch] = React.useContext(DataContext);
    const total = basket.reduce((amount, item)=>{
        return item.price * item.amount + amount;
    }, 0)
    console.log(basket)

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
                                return <ProductCard 
                                    product={item}
                                    renderDesc={true}
                                    flex={true}
                                    renderAdd={false}
                                    key={i} 
                                />
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
