import React from 'react'
import './artist-info.styles.scss'
import Button from '../Button/Button.component'
import {
  PlayFill,
  Shuffle,
  HeartFill,
  InfoCircle,
  Broadcast,
  ThreeDots,
} from 'react-bootstrap-icons'

interface ArtistInfoProps {
  artistName: string
  artistAttr: string
}

const ArtistInfo = (props: ArtistInfoProps) => {
  const { artistAttr, artistName } = props

  return (
    <div className="info-wrapper">
      <div className="artist-info">
        <div className="artist-desc">
          <div className="artist-name">{artistName}</div>
          <div className="artist-attr">{artistAttr}</div>
        </div>
        <div className="music-btns">
          <div className="primary-bts">
            <Button bgColor="dark" textColor="light" className="play-btn">
              <div className="btn-label">
                <PlayFill className="play-icon" />
                <div className="btn-txt">Play</div>
              </div>
            </Button>

            <Button
              customBGColor="rgba(30, 32, 33, 0.4)"
              textColor="light"
              className="shuffle-btn"
            >
              <div className="btn-label">
                <Shuffle className="shuffle-icon" />
                <div className="btn-txt">Shuffle</div>
              </div>
            </Button>
          </div>
          <div className="secondary-btns">
            <div className="added-btn sec-btn">
              <HeartFill className="sec-icon" />
              <div className="sec-text">Added</div>
            </div>
            <div className="credits-btn sec-btn">
              <InfoCircle className="sec-icon" />
              <div className="sec-text">Credits</div>
            </div>
            <div className="radio-btn sec-btn">
              <Broadcast className="sec-icon" />
              <div className="sec-text">Artist Radio</div>
            </div>
            <div className="more-btn sec-btn">
              <ThreeDots className="sec-icon" />
              <div className="sec-text">More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistInfo
