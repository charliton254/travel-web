import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import '../styles/navbar.css';

function Navbar() {
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to={'/'} className='navbar-logo'>TRAVEL</Link>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to={"/"} className='nav-links'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/Services"} className='nav-links'>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/Products"} className='nav-links'>Products</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/SignUp"} className='nav-links'>Sign Up</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </div>
    )
}

export default Navbar