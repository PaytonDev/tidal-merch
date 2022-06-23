import React from 'react'
import './artist-shop.styles.scss'
import ProductCarousel from '../Product-Carousel/product-carousel.component'
import { artistContent } from '../Artist-Content/artist-content.data'
import TourDateCard from '../Tour-Date-Card/tour-date-card.component'
import './artist-shop.styles.scss'

interface ArtistShopProps {}

/**
 * TODO:
 * evenly space tour date cards
 *
 */

const ArtistShop = () => {
  const { tourDates } = artistContent
  return (
    <div className="artist-shop-container">
      <ProductCarousel show={5} className="tour-carousel">
        {tourDates.map((date, idx) => {
          return (
            <TourDateCard
              idx={idx}
              img={date.image}
              locationCountry={date.locationCountry}
              locationProvince={date.locationProvince}
              event={date.event}
              dateFull={date.dateFull}
            />
          )
        })}
      </ProductCarousel>
    </div>
  )
}

export default ArtistShop
