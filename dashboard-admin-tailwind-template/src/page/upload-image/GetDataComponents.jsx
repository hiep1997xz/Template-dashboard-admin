import React from 'react'

const GetDataComponents = ({ result }) => {
  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 container mx-auto gap-10 my-12">
        {result.map((img, index) => (
          <div
            key={index}
            className="p-1 bg-white rounded flex-colo border border-blue-400">
            <img
              className="w-full h-64 object-cover"
              src={img.image}
              alt={img.title}
            />
            <h1 className="font-semibold text-blue-800 italic my-4 leading-8 text-center">
              {img.title}
            </h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default GetDataComponents
