import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='navbar'>
            <div className='logo'>APURA</div>

            <div className='mobile-icon' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                <li className='list-items'>
                    <select>
                        <option value='Products' disabled selected>Products</option>
                    </select>
                </li>
                <li className='list-items'>
                    <select>
                        <option value='Road map' disabled selected>Road map</option>
                    </select>
                </li>
                <li className='list-items'><a href='#our-mission'>Our mission</a></li>
                <li className='list-items'><a href='#for-days'>For days</a></li>
                <li className='list-items'><a href='#contact-us'>Contact us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;