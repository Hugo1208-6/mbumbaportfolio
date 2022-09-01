import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animation'
import './AboutMe.css';
import Mbumba_Resume from '../Resume/Hugues_Mbumba14.pdf'

function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return

        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS ={
        description:"My name is Hugues(Hugo) Mbumba. I am from the Democratic Republic of the Congo. I am a software developer and web designer. I moved to america for education and sport purposes and hope to obtain a job position that fits my knowledge and skills. I love to bring my imagination to life by creating good components. I am also a team player as sports have taught me. I will be a good asset to the company based on my skillset. " ,
        higlights:{
            bullets: [
                "Team Attributor",
                "Good communication skills",
                "Hard worker",
                "Quick learner ",
            ],
            heading: "Here are a few higlights:"
            
        }
    }
    const renderHighlight = ()=>{
        return(
            SCREEN_CONSTANTS.higlights.bullets.map((value, i)=>(
             <div className='highlight' key={i}>
                <div className='highlight-blob'> </div>
                    <span>{value}</span>
               
             </div>   
            ))
        )
    }
  return (
    <div className='about-me-container screen-container fade-out' id={props.id || ""}>
       
        <div className='about-me-parent'>
            <ScreenHeading title={'About Me'} subHeading={'why choose Me ?'}/>
            <div className='about-me-card'>
                <div className='about-me-profile'>
                </div>
                <div className='about-me-details'>
                    <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                    <div className='about-me-highlights'>
                        <div className='highlight-heading'>
                            <span>{SCREEN_CONSTANTS.higlights.heading}</span>
                        </div>
                        {renderHighlight()}
                    </div>
                    <div className='about-me-options'>
                         <button className='btn primary-btn' onClick={() =>ScrollService.scrollHandler.scrollToHireMe()}>   {" "}
                        Hire Me {" "}
                    </button>
                    <a href={Mbumba_Resume} download='Hugues_Mbumba14.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe