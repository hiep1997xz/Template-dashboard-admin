import React, { useState } from 'react'
import { Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { productImages } from '../../../assets'
import sliderSwiper from '../../../assets/file-txt/sliderSwiper.txt'

import './index.scss'

const SliderExample = () => {
  const [activeThumb, setActiveThumb] = useState()

  return (
    <div>
      {/* swiper */}
      <a
        href={sliderSwiper}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline float-right">
        Link code...
      </a>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div
          style={{
            width: '500px',
            backgroundColor: '#fff',
            padding: '20px',
          }}>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{
              swiper:
                activeThumb && !activeThumb.destroyed ? activeThumb : null,
            }}
            className="product-images-slider">
            {productImages.map((item, idx) => (
              <SwiperSlide key={idx}>
                <img src={item} alt="product images" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className="product-images-slider-thumbs">
            {productImages.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="product-images-slider-thumbs-wrapper">
                  <img src={item} alt="product images" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SliderExample
