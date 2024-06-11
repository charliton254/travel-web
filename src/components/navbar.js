import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <div className='navbar'>
            <div className='navbar-cont'>
                <Link to={'/'} className='navbar-logo'>TRAVEL</Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className='menu-change'>
                        {click ? <ListIcon /> : <MenuIcon />}
                    </i>
                </div>
                <ul className='ul-list'>
                    {click ? 'nav-menu-active' : 'nav-menu'}
                    <li className='nav-item'>
                        <Link to={"/"} className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/Services"} className='nav-links' onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/Products"} className='nav-links' onClick={closeMobileMenu}>Products</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/SignUp"} className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar