import React from 'react'
import CustomSlider from './custom-slider/CustomSlider'
import PopupSliderImg from './popup-slider-img/PopupSliderImg'
import ReactSlick from './react-slick/ReactSlick'
import SliderExample from './slider-swiper/SliderExample'
import SliderTailwind from './slider-tailwind/SliderTailwind'

const Slider = () => {
  return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <SliderExample />
        <div className="border-b mb-12 mt-12"></div>
        <CustomSlider />
        <div className="border-b mb-12 mt-12"></div>
        <ReactSlick />
        <div className="border-b mb-12 mt-12"></div>
        <SliderTailwind />
        <div className="border-b mb-12 mt-12"></div>
        <PopupSliderImg />
      </div>
  )
}

export default Slider
