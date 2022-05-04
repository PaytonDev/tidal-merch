import React from 'react'
import './tour-date-card.styles.scss'

interface TourDateCardProps {
  idx: number
  img: string
  title: string
  location: string
  dateDay: string
  dateMonth: string
  dateFull: string
}

const TourDateCard = (p: TourDateCardProps) => {
  const { idx, img, title, dateMonth, dateDay, dateFull, location } = p

  return (
    <div className={`tour-card ${idx === 0 ? 'first' : ''}`}>
      <img src={img} alt={dateFull} className="tour-date-img" />
      <div className="tour-date">
        <p className="tour-month">{dateMonth}</p>
        <p className="tour-day">{dateDay}</p>
      </div>
      <div className="tour-card-info">
        <p className="tour-card-title">{title}</p>
        <p className="tour-card-location">{location}</p>
      </div>
    </div>
  )
}

export default TourDateCard
