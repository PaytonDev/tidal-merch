import React from 'react'
import './artist-content.styles.scss'
import MusicTable from '../Music-Table/music-table.component'
import ProductCarousel from '../../components/Product-Carousel/product-carousel.component'
import { artistContent } from './artist-content.data'

interface ArtistContentProps {}
// Add Tickets Carousel and toggle for music vs tickets

const ArtistContent = () => {
  const { albums, singles, videos } = artistContent
  return (
    <div className="artist-content">
      <div className="artist-content-nav">
        <button>Music</button>
        <button>Tickets and Merch</button>
      </div>
      <MusicTable />
      <ProductCarousel show={5} skip={3} title="Albums">
        {albums.map((album, idx) => (
          <div className={`carousel-img ${idx === 0 ? 'first' : ''}`}>
            <img src={album.image} alt="placeholder" />
            <div className="music-info">
              <p className="music-title">{album.title}</p>
              <p className="artist-name">{album.artist}</p>
              <p className="release-date">{album.releaseYear}</p>
            </div>
          </div>
        ))}
      </ProductCarousel>
      <ProductCarousel show={5} skip={3} title={`EP & Singles`}>
        {singles.map((single, idx) => (
          <div className={`carousel-img ${idx === 0 ? 'first' : ''}`}>
            <img src={single.image} alt="placeholder" />
            <div className="music-info">
              <p className="music-title">{single.title}</p>
              <p className="artist-name">{single.artist}</p>
              <p className="release-date">{single.releaseYear}</p>
            </div>
          </div>
        ))}
      </ProductCarousel>
      <ProductCarousel show={3} title="Videos">
        {videos.map((video, idx) => (
          <div className={`carousel-video-img ${idx === 0 ? 'first' : ''}`}>
            <img src={video.image} alt="placeholder" />
            <div className="music-info">
              <p className="music-title">{video.title}</p>
              <p className="artist-name">{video.artist}</p>
              <p className="video-time">{video.time} MINS</p>
            </div>
          </div>
        ))}
      </ProductCarousel>
    </div>
  )
}

export default ArtistContent
