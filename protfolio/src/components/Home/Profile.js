import React from 'react'
import Typical from 'react-typical'
import ScrollService from '../../utilities/ScrollService'
// import { IconName } from "react-icons/vsc";
// import HuguesResume1 from '../Resume/HuguesResume1.pdf'
import './Profile.css'
function Profile() {
  
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                   <a href="https://web.facebook.com/price.1">
                    <i className="fa fa-facebook-square"></i>
                   </a>
                     <a href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1CHBD_enUS954US954&oq=gogo&aqs=chrome.2.69i57j46i67i199i465j46i10i131i199i433i465j46i67j0i10i433j0i10i131i433j0i67j0i10i433l2j0i271.6301j0j4&sourceid=chrome&ie=UTF-8">
                    <i className=' fa fa-google-plus-square'></i>
                   </a>
                     <a href="https://www.instagram.com/">
                    <i className='fa fa-instagram'></i>
                   </a>
                     <a href="https://www.youtube.com/watch?v=ilw_g_rxtVc&t=444s">
                   <i className="fa fa-youtube-square" aria-hidden="true"></i>
                   </a>
                     <a href="https://twitter.com/i/flow/login">
                    <i className=' fa fa-twitter-square'></i>
                   </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {""}
                       Hello , I'M <span className='highlighted-text'>Hugues</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                  <span className='primary-text'>
                        {""}
                         <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    ".Net MVC Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
                       <span className='profile-role-tagline'>
                         The art of creating User interfaces for apps, using front and back-end operations
                    </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn' onClick={() =>ScrollService.scrollHandler.scrollToHireMe()}>{" "}
                        Hire Me 
                    </button>
                    <a href='Hugues_Mbumba14.pdf' download='Hugues_Mbumba14.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
               </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
