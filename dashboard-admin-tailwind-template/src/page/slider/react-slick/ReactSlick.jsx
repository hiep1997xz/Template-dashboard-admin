import React from 'react'
import Slider from 'react-slick'
import { productImages } from '../../../assets'
import reactSlick from '../../../assets/file-txt/react-slick.txt'
import './index.scss'

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  )
}

const ReactSlick = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <a
        href={reactSlick}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline float-right">
        Link code...
      </a>
      <div className="flex justify-center">
        <Slider {...settings}>
          {productImages.map((img, index) => {
            console.log(img)
            return (
              <div
                className="slider-img-custom"
                key={index}
                style={{ marginLeft: '10px' }}>
                <img src={img} alt="" />
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default ReactSlick
