import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Carousel/>
            </div>
            <div>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home