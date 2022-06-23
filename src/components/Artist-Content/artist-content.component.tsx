import React, { useState } from 'react'
import './artist-content.styles.scss'
import ArtistShop from '../Artist-Shop/artist-shop.component'
import ArtistMusic from '../Artist-Music/artist-music.component'

interface ArtistContentProps {}

// TODO: Add Tickets Carousel and toggle for music vs tickets

const ArtistContent = () => {
  const [showShop, setShowShop] = useState(false)

  return (
    <div className="artist-content">
      <div className="artist-content-nav">
        <button onClick={() => setShowShop(false)}>Music</button>
        <button onClick={() => setShowShop(true)}>Tickets and Merch</button>
      </div>
      {!showShop ? <ArtistMusic /> : <ArtistShop />}
    </div>
  )
}

export default ArtistContent
