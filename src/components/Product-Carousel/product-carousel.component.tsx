import React, { PropsWithChildren, FC, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import './product-carousel.styles.scss'

interface ProductCarouselProps {
  children: React.ReactNode[]
  show: number
  title?: string
  skip?: number
}

const ProductCarousel = (props: ProductCarouselProps) => {
  const { children, show, title, skip } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState<number>(children.length)

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
  }, [children, setLength])

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }
  return (
    <div className="carousel-container-section">
      <div className="carousel-container">
        <header className="carousel-container-header">
          {title ? <p className="title">{title}</p> : null}
          <div className="product-nav">
            <div className="product-nav-buttons">
              <div className="nav-btns" onClick={prev}>
                <ChevronLeft />
              </div>
              <div className="nav-btns" onClick={next}>
                <ChevronRight />
              </div>
            </div>
            <div className="view-all">View All</div>
          </div>
        </header>
        <div className="carousel-wrapper">
          <div className="carousel-content-wrapper">
            <div
              className={`carousel-content show-${show}`}
              style={{
                transform: `translateX(-${
                  currentIndex * ((skip ? skip * 100 : 100) / show)
                }%)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCarousel
