import React from 'react'
import StyleInput from './style-input/StyleInput'
import styleInputTxt from '../../assets/file-txt/styleInputTxt.txt'

import './index.scss'

const Form = () => {
  return (
    <>
      <a
        href={styleInputTxt}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline float-right mt-8 mr-16">
        Link code...
      </a>
      <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <StyleInput />
    </div>
    </>
    
  )
}

export default Form