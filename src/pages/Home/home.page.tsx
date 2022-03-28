import './home.styles.scss'
import Sidebar from '../../components/Sidebar/sidebar.component'
import ArtistBanner from '../../components/Artist-Banner/artist-banner.component'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="main-container">
        <ArtistBanner />
      </div>
    </div>
  )
}

export default Home
