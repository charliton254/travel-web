import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import FlightIcon from '@mui/icons-material/Flight';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals.
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            type='email'
                            name='email'
                            placeholder='Input Email'
                            className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/' >Testimonials</Link>
                        <Link to='/' >Careers</Link>
                        <Link to='/' >Investors</Link>
                        <Link to='/' >Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/' >Contact</Link>
                        <Link to='/' >Support</Link>
                        <Link to='/' >Destinations</Link>
                        <Link to='/' >Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/' >Submit Video</Link>
                        <Link to='/' >Ambassadors</Link>
                        <Link to='/' >Agency</Link>
                        <Link to='/' >Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='https://www.instagram.com' >Instagram</Link>
                        <Link to='https://www.facebook.com' >Facebook</Link>
                        <Link to='https://www.linkedin.com/in/charliton-mambeyi-a92b48226/' >LinkedIn</Link>
                        <Link to='https://x.com/i/flow/login' > <XIcon /></Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL <FlightIcon />
                        </Link>
                    </div>
                    <small className='website-rights'> Copyright TRVL © 2025</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='https://www.facebook.com' target='_blank' aria-label='Facebook'>
                            <FacebookIcon />
                        </Link>
                        <Link className='social-icon-link instagram' to='https://www.instagram.com' target='_blank' aria-label='Instagram'>
                            <InstagramIcon />
                        </Link>
                        <Link className='social-icon-link X' to='https://x.com/i/flow/login' target='_blank' aria-label='X'>
                            <XIcon />
                        </Link>
                        <Link className='social-icon-link linkedIn' to='https://www.linkedin.com/in/charliton-mambeyi-a92b48226/' target='_blank' aria-label='linkedIn'>
                            <LinkedInIcon />
                        </Link>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Footer