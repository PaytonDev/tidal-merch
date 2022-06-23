import React from 'react'
import './tour-date-card.styles.scss'

interface TourDateCardProps {
  idx: number
  img: string
  event: string
  locationProvince: string
  locationCountry: string
  dateFull: string
}

const TourDateCard = (p: TourDateCardProps) => {
  const { idx, img, event, dateFull, locationProvince, locationCountry } = p

  return (
    <div className={`tour-card ${idx === 0 ? 'first' : ''}`}>
      <img src={img} alt={dateFull} className="tour-date-img" />
      <div className="tour-card-info">
        <p className="tour-card-event">{event}</p>
        <small className="tour-card-location-province">
          {locationProvince}
        </small>
        <small className="tour-card-location-country">{locationCountry}</small>
      </div>
    </div>
  )
}

export default TourDateCard
