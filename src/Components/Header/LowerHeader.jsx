import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function LowerHeader() {
    return (
        <div className='lower__container'>
            <ul>
                <li>
                    <MenuOutlinedIcon />
                    <p>All</p>
                </li>
                <li>Amazon Haul</li>
                <li>Today's Deals</li>
                <li>Medical Care</li>
                <li>Customer Service</li>
                <li>Registry</li>
                <li>Gift Cards</li>
                <li>Sell</li>
            </ul>
        
        </div>
    )
}

export default LowerHeader

