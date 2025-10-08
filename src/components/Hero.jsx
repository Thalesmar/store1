import React from 'react'
import { useNavigate } from 'react-router-dom'
import _WirelessHeadset from '../assets/Wireless-Headset.png';
import Aurora from './Aurora';
import './Aurora.css';


const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className='hero-section relative'>
        <div className='absolute inset-0 w-full h-full'>
            <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
            />
        </div>
        <div className='hero-text relative z-10'>
            <h1 className='heading text-white'>Latest Arrivals</h1>
            <p className='para text-gray-200'>Discover the newest products in our collection</p>
            <button className='shop-Btn' onClick={() => navigate('/products')}>Shop Now</button>
            <button className='learn-btn'>Learn More</button>
        </div>

        <div className='hero-banner relative z-10'>
            <img src={_WirelessHeadset} alt="Wireless Headset" />
        </div>
    </section>
  )
}

export default Hero
