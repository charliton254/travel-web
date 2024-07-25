import React from 'react'
import '../components/HeroSection'
import HeroSection from '../components/HeroSection'
import Card from '../components/Card'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <HeroSection />
            <Card />
            <Footer />
        </div>
    )
}

export default Home