import './home.styles.scss'
import Sidebar from '../../components/Sidebar/sidebar.component'
import ArtistBanner from '../../components/Artist-Banner/artist-banner.component'
import ArtistContent from '../../components/Artist-Content/artist-content.component'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="main-container">
        <ArtistBanner />
        <ArtistContent />
      </div>
    </div>
  )
}

export default Home
