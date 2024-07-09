import React from 'react'
import CardItem from './CardItem'
import '../styles/Card.css';

function Card() {
    return (
        <div className='card'>
            <h1>Check out this EPIC Destinations</h1>
            <div className='card-container'>
                <div className='card-wrapper'>
                    <ul className='card-items'>
                        <CardItem
                            src='Images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services' />
                        <CardItem
                            src='Images/img-2.jpg'
                            text='Travel through the Island of Bali in a Private Cruise '
                            label='Luxury'
                            path='/services' />
                    </ul>
                    <ul className='card-items'>
                        <CardItem
                            src='Images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services' />
                        <CardItem
                            src='Images/img-4.jpg'
                            text='Experience Football on top of the Himalayan Mountains'
                            label='Adventure'
                            path='/products' />
                        <CardItem
                            src='Images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Luxury'
                            path='/sighn-up' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card