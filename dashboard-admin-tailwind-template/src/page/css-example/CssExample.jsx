import React from 'react'
import dualring from '../../assets/file-txt/dualring.txt'
import loadingEllipsis from '../../assets/file-txt/loading-ellipsis.txt'
import loadingfb from '../../assets/file-txt/loadingfb.txt'
import ring from '../../assets/file-txt/ring.txt'
import roller from '../../assets/file-txt/roller.txt'
import spinner from '../../assets/file-txt/spinner.txt'
import defaultloading from '../../assets/file-txt/defaultloading.txt'
import './index.css'

const loadings = [
  {
    file: loadingfb,
    element: (
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    ),
  },
  {
    file: loadingEllipsis,
    element: (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ),
  },
  {
    file: dualring,
    element: <div className="lds-dual-ring"></div>,
  },
  {
    file: ring,
    element: (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ),
  },
  {
    file: roller,
    element: (
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ),
  },
  {
    file: spinner,
    element: (
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ),
  },
  {
    file: defaultloading,
    element: (
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ),
  },
]

const CssExample = () => {
  console.log(loadings)
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div>
        {loadings.map((loading, index) => {
          return (
            <a href={loading.file} target="_blank" rel="noreferrer" key={index}>
              {loading?.element}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default CssExample
