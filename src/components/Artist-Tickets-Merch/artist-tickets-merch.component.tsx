import React from 'react'
import './artist-tickets-merch.styles.scss'
import ProductCarousel from '../Product-Carousel/product-carousel.component'
import TourDateCard from '../Tour-Date-Card/tour-date-card.component'
import Calendar from '../../assets/Calendar.png'

interface ArtistTicketsMerchProps {}

const tourDateInfo = [
  {
    dateDay: '02',
    dateMonth: 'JUN',
    title: 'Primavera Sound Festival Weekend 1 2022',
    location: 'Parc del Forum Barcelona, Spain',
    dateFull: 'June second',
  },
  {
    dateDay: '03',
    dateMonth: 'JUN',
    title: 'Primavera Sound Festival Weekend 1 2022',
    location: 'Parc del Forum Barcelona, Spain',
    dateFull: 'June third',
  },
  {
    dateDay: '04',
    dateMonth: 'JUN',
    title: 'Primavera Sound Festival Weekend 1 2022',
    location: 'Parc del Forum Barcelona, Spain',
    dateFull: 'June fourth',
  },
  {
    dateDay: '05',
    dateMonth: 'JUN',
    title: 'Primavera Sound Festival Weekend 1 2022',
    location: 'Parc del Forum Barcelona, Spain',
    dateFull: 'June fifth',
  },
  {
    dateDay: '06',
    dateMonth: 'JUN',
    title: 'Primavera Sound Festival Weekend 1 2022',
    location: 'Parc del Forum Barcelona, Spain',
    dateFull: 'June sixth',
  },
]

const ArtistTicketsMerch = () => {
  return (
    <div>
      <ProductCarousel title="Tour Dates" show={5}>
        {tourDateInfo.map((date, idx) => (
          <TourDateCard
            dateDay={date.dateDay}
            idx={idx}
            title={date.title}
            location={date.location}
            dateMonth={date.location}
            dateFull={date.dateFull}
            img={Calendar}
          />
        ))}
      </ProductCarousel>
    </div>
  )
}

export default ArtistTicketsMerch
