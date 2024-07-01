import React from 'react'
import './AppDownload.css'
import { assets } from '../../Assests/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id="app-download">
      <h1>For Better Experience download<br/>ChocoBox App</h1>
      <div className='app-download-paltforms'>
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
