import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import popupSliderImg from '../../../assets/file-txt/PopupSliderImg.txt'

const images = [
  {
    title: 'Kitten 1',
    caption: 'Caption 1',
    url: '//placekitten.com/1500/500',
  },
  {
    title: 'Kitten 2',
    caption: 'Caption 2',
    url: '//placekitten.com/4000/3000',
  },
  {
    title: 'Kitten 3',
    caption: 'Caption 3',
    url: '//placekitten.com/800/1200',
  },
  {
    title: 'Kitten 4',
    caption: 'Caption 4',
    url: '//placekitten.com/1500/1500',
  },
]

function PopupSliderImg() {
  const [isOpen, setIsOpen] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)

  return (
    <>
      <a
        href={popupSliderImg}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline float-right">
        Link code...
      </a>
      <div>
        <img
          src={images[imgIndex].url}
          alt=""
          onClick={() => setIsOpen(true)}
          style={{ height: '300px', margin: 'auto' }}
        />
        {isOpen && (
          <Lightbox
            imageTitle={images[imgIndex].title}
            imageCaption={images[imgIndex].caption}
            mainSrc={images[imgIndex].url}
            nextSrc={images[(imgIndex + 1) % images.length].url}
            prevSrc={images[(imgIndex + images.length - 1) % images.length].url}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setImgIndex((imgIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setImgIndex((imgIndex + 1) % images.length)
            }
          />
        )}
      </div>
    </>
  )
}

export default PopupSliderImg
