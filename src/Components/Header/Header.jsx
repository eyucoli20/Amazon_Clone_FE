import React, { useContext } from 'react';
import './LowerHeader';
import './Header.css';
import { Link } from 'react-router-dom';
import amazone_logo from '../../assets/amazon_logo.png'
import USflag from '../../assets/us_flag.jpeg'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider.jsx/DataProvider';



function Header() {

    const [{basket}, dispatch] = useContext(DataContext);
    
    return (
    <section className= 'fixed'>
        <section>
            <div className='header__container'>
                <div className='logo__container'>
                    <Link to='/'>
                        <img src={amazone_logo} alt=""/>
                    </Link>
                    <div className='header__delivery'>
                        <span>
                            <LocationOnSharpIcon />
                        </span>
                        <div>
                            <p>Deliverd to</p>
                            <span>USA</span>
                        </div>
                    </div>
                </div >
                <div className='header__search'>
                    <select>
                        <option value="">All</option>
                    </select>
                    <input type="text" />
                    <SearchIcon size={35}/>
                </div>
                <div className='header__orderContainer'>
                    <Link to="" className='header__language'> 
                        <img src={USflag} alt="" />
                        <select name="" id=''>
                            <option value="">EN</option>
                        </select>
                    </Link>
                    <Link to="">
                        <div>
                            <p>Sign In</p>
                            <span>Account & Lists</span>
                        </div>
                    </Link>
                    <Link to="/orders">
                        <p>Returns</p>
                        <span>& Orders</span> 
                    </Link>
                    <Link to="/cart" className='header__cart'>
                        <AddShoppingCartSharpIcon />
                        <span>{basket.length}</span>
                    </Link>
                </div>
            </div>
        </section>
        <LowerHeader />
    </section>
    );
}

export default Header;