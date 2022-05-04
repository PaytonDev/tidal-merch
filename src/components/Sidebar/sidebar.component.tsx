import './sidebar.styles.scss'
import Avatar from '@mui/material/Avatar'
import {
  Broadcast,
  Vinyl,
  MusicNoteList,
  PersonCircle,
  PlayBtn,
  Plus,
  ThreeDots,
} from 'react-bootstrap-icons'
// Find
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="account item">
          <div className="account-avatar">
            <Avatar sx={{ width: 24, height: 24, fontSize: '10px' }}>BP</Avatar>
            <div className="account-name">Breeana</div>
          </div>
          <div className="account-options">
            <ThreeDots className="nav-icon" id="three-dots" />
          </div>
        </div>
        <div className="pages section">
          <div className="page-link item">Home</div>
          <div className="page-link item">Explore</div>
          <div className="page-link item">Videos</div>
        </div>
        <div className="collections section">
          <div className="header">My Collection</div>
          <div className="collection-link item">
            <div className="item-content">
              <Vinyl className="nav-icon" />
              <div>Albums</div>
            </div>
          </div>
          <div className="collection-link item">
            <div className="item-content">
              <MusicNoteList className="nav-icon" />
              <div>Playlists</div>
            </div>
          </div>
          <div className="collection-link item">
            <div className="item-content">
              <PersonCircle className="nav-icon" />
              <div>Artists</div>
            </div>
          </div>
          <div className="collection-link item">
            <div className="item-content">
              <Broadcast className="nav-icon" />
              <div>Mixes &#38; Radio</div>
            </div>
          </div>
          <div className="collection-link item">
            <div className="item-content">
              <PlayBtn className="nav-icon" />
              <div>Videos</div>
            </div>
          </div>
        </div>
        <div className="playlists section">
          <div className="header">My Playlists</div>
          <div className="playlist-link item">
            <div className="item-content">
              <Plus className="nav-icon-plus" />
              <div>Create...</div>
            </div>
          </div>
          <div className="playlist-link item">
            <div className="item-content">
              <div>Col3trane Favs</div>
            </div>
          </div>
          <div className="playlist-link item">
            <div className="item-content">
              <div>Marc Favs</div>
            </div>
          </div>
          <div className="playlist-link item">
            <div className="item-content">
              <div>Workout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
