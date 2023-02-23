import { PickerOverlay } from 'filestack-react'
import React, { useEffect, useState } from 'react'
import { getData, postData } from '../../api/ApiFlieStack'
import GetDataComponents from './GetDataComponents'
import Loading from './Loading'

const UploadImage = () => {
  const [isPicker, setIsPicker] = useState(false)
  const [image, setImage] = useState('')
  const [result, setResult] = useState([])
  const [getDataLoading, setGetDataLoading] = useState(true)
  const [postDataLoading, setPostDataLoading] = useState(false)
  const [postDatas, setPostDatas] = useState()
  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    !image
      ? alert('Image require')
      : title.length < 3
      ? alert('title is too short')
      : postData({ title, image, setPostDatas, setPostDataLoading })
  }

  useEffect(() => {
    getData({ setResult, setGetDataLoading })
    if (postDatas) {
      setImage('')
      setTitle('')
      getData({ setResult, setGetDataLoading })
    }
  }, [postDatas])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="bg-blue-50 px-4 flex-colo p-4">
        <form
          onSubmit={submitHandler}
          className="bg-blue-100 shadow-md rounded lg:w-2/5 md:w-3/5 w-full flex-colo py-12 px-4 m-auto">
          {image ? (
            <img
              src={image && image.filesUploaded[0].url}
              alt="imageUploded"
              className="w-full h-56 object-cover"
            />
          ) : (
            <button
              type="button"
              className="w-full text-lg font-bold border-dashed h-56 border-4 border-blue-800 text-blue-800"
              onClick={() =>
                isPicker ? setIsPicker(false) : setIsPicker(true)
              }>
              Choose Image
            </button>
          )}

          {/* input title */}
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Image Title"
            className="w-full my-8 bg-white py-4 px-2 rounded border border-blue-800 text-blue-800 font-semibold"
          />

          <button
            type="submit"
            className="w-full bg-blue-800 py-4 rounded text-white font-bold">
            {postDataLoading ? 'Loading....' : 'Submit'}
          </button>

          {/* Filestack */}
          <div className="mt-4 relative">
            {isPicker && (
              <PickerOverlay
                apikey={process.env.REACT_APP_API_FILE_KEY}
                onSuccess={(res) => {
                  setImage(res)
                  setIsPicker(false)
                }}
                onError={(res) => alert(res)}
                pickerOptions={{
                  maxFiles: 1,
                  accept: ['image/*'],
                  errorsTimeout: 2000,
                  maxSize: 1 * 1000 * 1000,
                }}
              />
            )}
          </div>
        </form>
        <div className="text-center p-4">
          {getDataLoading && <Loading />}
          <GetDataComponents result={result} />
        </div>
      </div>
    </div>
  )
}

export default UploadImage
