import './artist-banner.styles.scss'
import Banner from '../../assets/images/Kehlani-banner.jpg'

const ArtistBanner = () => {
  // useRef to find height of parent element then render the overlay
  return (
    <div className="banner">
      <div className="banner-image-container">
        <div className="images">
          <img
            src={Banner}
            alt="artist-banner"
            className="banner-image darken"
          />
          <img src={Banner} alt="artist-banner" className="banner-image" />
          <img
            src={Banner}
            alt="artist-banner"
            className="banner-image darken"
          />
        </div>

        <div className="artist-info"></div>
      </div>
    </div>
  )
}

export default ArtistBanner
