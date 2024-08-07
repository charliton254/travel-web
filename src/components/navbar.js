import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import '../styles/navbar.css';
import FlightIcon from '@mui/icons-material/Flight';

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
                <Link to={'/'} className='navbar-logo'>TRAVEL<FlightIcon /></Link>
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
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </div>
    )
}

export default Navbar