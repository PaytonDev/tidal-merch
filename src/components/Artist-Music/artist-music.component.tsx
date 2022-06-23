import React from 'react'
import './artist-music.styles.scss'
import MusicTable from '../Music-Table/music-table.component'
import ProductCarousel from '../Product-Carousel/product-carousel.component'
import { artistContent } from '../Artist-Content/artist-content.data'

const ArtistMusic = () => {
  const { albums, singles, videos } = artistContent
  return (
    <>
      <MusicTable />
      <ProductCarousel show={5} skip={3} title="Albums">
        {albums.map((album, idx) => (
          <div
            className={`carousel-img ${idx === 0 ? 'first' : ''}`}
            key={`${album}-${idx}`}
          >
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
          <div
            className={`carousel-img ${idx === 0 ? 'first' : ''}`}
            key={`${single}-${idx}`}
          >
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
          <div
            className={`carousel-video-img ${idx === 0 ? 'first' : ''}`}
            key={`${video}-${idx}`}
          >
            <img src={video.image} alt="placeholder" />
            <div className="music-info">
              <p className="music-title">{video.title}</p>
              <p className="artist-name">{video.artist}</p>
              <p className="video-time">{video.time} MINS</p>
            </div>
          </div>
        ))}
      </ProductCarousel>
    </>
  )
}

export default ArtistMusic
