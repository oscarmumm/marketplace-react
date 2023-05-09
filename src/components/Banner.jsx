import React from 'react'
import BannerImg from '../assets/img/banners/cyber-monday-banner.webp'
import '../styles/Banner.css'

const Banner = () => {
  return (
    <>
    <img className='banner' src={BannerImg} alt="banner" />
    </>
  )
}

export default Banner