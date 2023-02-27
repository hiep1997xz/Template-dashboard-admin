import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import { useStateContext } from './contexts/ContextProvider'
import { FiSettings } from 'react-icons/fi';

import './App.css'
import ThemeSettings from './components/themeSetting/ThemeSettings'
import Table from './page/table/Table'
import CssExample from './page/css-example/CssExample'
import UploadImage from './page/upload-image/UploadImage'
import DownloadFile from './page/download-file/DownloadFile'
import Ecommerce from './page/Home'
import Home from './page/Home'
import TableAntd from './page/table-antd/TableAntd'
import FormCreateUser from './page/table-antd/FormCreateUser'
import TableAntdAdv from './page/table-antd-adv/TableAntdAdv'
import SliderExample from './page/slider/slider-swiper/SliderExample'
import Slider from './page/slider/Slider'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'react-image-lightbox/style.css'
import OpenPopupImg from './page/open-img/OpenPopupImg'
import Cart from './page/cart/Cart'
import Form from './page/form/Form'
import Card3d from './page/card-3d/Card3d'
import ReduxToolkit from './page/redux/ReduxToolkit'

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext()

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode')
    const currentThemeMode = localStorage.getItem('themeMode')
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor)
      setCurrentMode(currentThemeMode)
    }
  }, [])

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <NavBar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                <Route path="/" element={(<Home />)} />
                <Route path="/home" element={(<Home />)} />
                <Route path="/table" element={(<Table />)} />
                <Route path="/table-antd" element={(<TableAntd />)} />
                <Route path="/table-antd-adv" element={(<TableAntdAdv />)} />
                <Route path="/create-user" element={(<FormCreateUser />)} />
                <Route path="/loading-css" element={(<CssExample />)} />
                <Route path="/upload-img" element={(<UploadImage />)} />
                <Route path="/open-popup-img" element={(<OpenPopupImg />)} />
                <Route path="/download-file" element={(<DownloadFile />)} />
                <Route path="/slider" element={(<Slider />)} />
                <Route path="/cart" element={(<Cart />)} />
                <Route path="/form" element={(<Form />)} />
                <Route path="/cart-3d" element={(<Card3d />)} />
                <Route path="/redux-toolkit" element={(<ReduxToolkit />)} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
