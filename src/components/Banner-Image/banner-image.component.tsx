import React from 'react'
import './banner-image.styles.scss'
import Banner from '../../assets/images/Kehlani-banner.jpg'

interface BannerImageProps {}

const BannerImage = () => {
  return (
    <div className="banner-image-container">
      <div className="images">
        <img src={Banner} alt="artist-banner" className="banner-image darken" />
        <img src={Banner} alt="artist-banner" className="banner-image" />
        <img src={Banner} alt="artist-banner" className="banner-image darken" />
      </div>
    </div>
  )
}

export default BannerImage
