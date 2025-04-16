import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import breaking_banner from '../../assets/breaking_banner.jpg'
import breaking_title from '../../assets/breaking_title.jpg'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="breaking">
        <img src={breaking_banner} alt="Breaking Bad Banner" className='banner-img'/>
        <div className="breaking-caption">
          {/* <img src={breaking_title} alt="Breaking Bad Title" className='caption-img'/> */}
          <p>Breaking Bad is an American crime drama television series created and produced by Vince Gilligan for AMC. 
            Set and filmed in Albuquerque, New Mexico.</p>
          <div className="breaking-btns">
            <button className='btn'><img src={play_icon} alt="Play" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="Info" />More info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
    </div>
  )
}

export default Home