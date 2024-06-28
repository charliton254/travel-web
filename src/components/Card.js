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
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card