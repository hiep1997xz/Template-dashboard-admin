import React, { useState } from 'react'
import openModalImg from '../../assets/file-txt/openModalImg.txt'
import './index.css'

const imgs = [
  {
    url: 'https://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/cover/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg',
    id: 0,
  },
  {
    url: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg',
    id: 1,
  },
  {
    url: 'https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg',
    id: 2,
  },
  {
    url: 'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
    id: 3,
  },
  {
    url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
    id: 4,
  },
  {
    url: 'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200',
    id: 5,
  },
]

export const ModalImg = ({setOpen, imge}) => {
  console.log(imge);
  return (
    <div id="myModal" className="modal">
      <div className="close" onClick={() => setOpen(false)}>&times;</div>
      <img src={imge} alt="" className="modal-content" id="img01" />
      <div id="caption"></div>
    </div>
  )
}

const OpenPopupImg = () => {
  const [open, setOpen] = useState(false)
  const [imge, setImge] = useState('')

  const handleShow = (img) => {
    setOpen(true)
    setImge(imgs[img.id].url);
  }

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <a
        href={openModalImg}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline float-right">
        Link code...
      </a>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 container mx-auto gap-10 my-12">
          {imgs.map((img, index) => {
            return (
              <div key={index}>
                <div
                  className="p-1 bg-white rounded flex-colo border border-blue-400"
                  onClick={() => handleShow(img)}>
                  <img
                    src={img?.url}
                    className="w-full h-64 object-cover"
                    alt=""
                  />
                </div>
              </div>
            )
          })}
        </div>
        {open && <ModalImg setOpen={setOpen} imge={imge} />}
      </div>
    </>
  )
}

export default OpenPopupImg
