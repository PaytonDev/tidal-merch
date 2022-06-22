import './artist-banner.styles.scss'
import BannerImage from '../Banner-Image/banner-image.component'
import ArtistInfo from '../Artist-Info/artist-info.component'

const ArtistBanner = () => {
  return (
    <div className="banner">
      <BannerImage />
      <ArtistInfo
        artistName="Kehlani"
        artistAttr="Artist, Songwriter, Performer, Producer, Engineer"
      />
    </div>
  )
}

export default ArtistBanner
