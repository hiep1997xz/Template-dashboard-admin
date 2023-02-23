import React, { useEffect } from 'react'
import logo from '../../assets/img-cart/logo.png'
import Gradients from './Gradients'
import Info from './info/Info'
import ProductImages from './ProductImg'

import './index.scss'

const Cart = () => {
  let sizes, colors, shoes, gradients, shoeBackground, shoeHeight
  let prevColor = 'blue'
  let animateOrNot = true

  function changeColor() {
    if (!animateOrNot) {
      console.log('waittttt')
      return
    }
    let primary = this.getAttribute('primary')
    let color = this.getAttribute('color')
    let shoe = document.querySelector(`.shoe[color="${color}"]`)
    let gradient = document.querySelector(`.gradient[color="${color}"]`)
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`)

    // showing correct color
    colors.forEach((color) => color.classList.remove('active'))
    this.classList.add('active')

    // changing primary css letiable
    document.documentElement.style.setProperty('--primary', primary)

    // showing correct img
    shoes.forEach((s) => s.classList.remove('show'))
    shoe.classList.add('show')

    // dealing with gradient
    gradients.forEach((g) => g.classList.remove('display', 'behind'))
    prevGradient.classList.add('behind')
    gradient.classList.add('display')

    // logic
    prevColor = color
    animateOrNot = false

    // hack
    setTimeout(() => {
      animateOrNot = true
    }, 800)
  }

  function changeSize() {
    sizes.forEach((size) => size.classList.remove('active'))
    this.classList.add('active')
  }

  // for responsive behaviour
  const changeHeight = () => {
    let x = window.matchMedia('(max-width:1000px)')

    !shoes ? (shoeHeight = 0) : (shoeHeight = shoes[0].offsetHeight)

    if (x.matches) {
      if (shoeHeight === 0) {
        try {
          setTimeout(changeHeight, 50)
        } catch (error) {
          alert('Something is Wrong!!')
        }
      }
      shoeBackground.style.height = `${shoeHeight * 0.9}px`
    } else if (!!shoeBackground) {
      // go back to default
      shoeBackground.style.height = '475px'
    }
  }

  useEffect(() => {
    sizes = document.querySelectorAll('.size')
    colors = document.querySelectorAll('.color')
    shoes = document.querySelectorAll('.shoe')
    gradients = document.querySelectorAll('.gradient')
    shoeBackground = document.querySelector('.shoeBackground')

    colors.forEach((color) => color.addEventListener('click', changeColor))
    sizes.forEach((size) => size.addEventListener('click', changeSize))
    changeHeight()
  }, [])
  window.addEventListener('resize', changeHeight)

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <a
        href="https://github.com/aman-atg/react-product-card"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline float-right">
        Link code...
      </a>
      <div className="Home">
        <div className="container">
          <div className="card">
            <div className="shoeBackground">
              <Gradients />
              <h1 className="nike">nike</h1>
              <img src={logo} alt="logo" className="logo" />
              <a href="/#" className="share">
                <i className="fas fa-share-alt"></i>
              </a>
              <ProductImages />
            </div>
            <Info />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
