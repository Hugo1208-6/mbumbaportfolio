import React,{useState} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animation'
import './Resume.css';


function Resume(props) {
   
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !==props.id)
        return;

        Animations.animation.fadeInScreen(props.id);
    };
    const fadeInSubscription =
     ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    const ResumeHeading = (props) =>{

     return(
          <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate  && props.toDate ?(
                        <div className='heading-date'>
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ):(
                    <div></div>
                    )}
               
               <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
               </div>
               <div className='resume-sub-heading'> 
                    <span>{props.subHeading ? props.subHeading : ''}</span>
               </div>
               
            </div>
        </div>
        )};

    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Hobbies", logoSrc: "interests.svg"},
    ];

    const programmingSkillDetails = [
        {skill: 'React js', ratingPercentage: 85},
        {skill: 'JavaScript', ratingPercentage: 85},     
        {skill: 'C#', ratingPercentage: 75},
        {skill: 'SQL', ratingPercentage: 80},
        {skill: 'Html', ratingPercentage: 85},
        {skill: 'CSS', ratingPercentage: 85},
        
    ]
    const projectDetails = [
        {
            title: "Personal Portfolio website",
            duration : { fromDate: "2021", toDate: "2022"},
            description: " This is a personal portfolio that shows some details about me and my projects",
            subHeading: "Tools Used: React js, Bootstrap",
        },
        
        {
            title: "African restaurant website",
            duration : { fromDate: "2021", toDate: "current"},
            description: " This is an African restaurent menu website that will show what kind of food they have ",
            subHeading: "Tools Used: React js, taillwind Css and FireBase for the storage",
        },
        
    ];


    const resumeDetails = [
        <div className='resume-screen-container' key="education" >
            <ResumeHeading
            heading={"University of Southern Indiana"}
            subHeading={"BACHELOR OF SCIENCE IN COMPUTER SCIENCE"}
            fromDate={"2019"}
            toDate={"2022"}
                />
              <ResumeHeading
            heading={" Vincennes University "}
            subHeading={"ASSOCIATE DEGREE IN GENERAL STUDIES"}
            fromDate={"2017"}
            toDate={"2019"}
            />
        </div>,

        

            <div className='resume-screen-container programming-skills-container
            ' key="programming-skills">
                {programmingSkillDetails.map((skill, index)=>(
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                        <div className='skill-percentage'>
                            <div style={{width: skill.ratingPercentage + "%"}} className="active-percentage">

                            </div>
                        </div>
                    </div>
                ))}
            </div>,
            <div className='resume-screen-container' key="projects">
                {projectDetails.map((projectDetails, index)=>(
                    <ResumeHeading key={index}
                    heading={projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}/>
                ))}
            </div>,

            <div className='resume-screen-container' key="interests">
                <ResumeHeading 
                heading="Basketball"
                description =" Basketball is one of my passions. I use it to relax my mind"/>
                <ResumeHeading 
                heading="Drawing"
                description ="I like drawing and creating diffrent designs based on my imagination"/>
                <ResumeHeading
                heading="Learning code"
                description =" learning code helps me discover more things about technology in general and help me understand more content with different computer languages "/>
            </div>
        
    ];

    const handleCarousal =(index)=>{
    let offsetHeight = 360;
    let newCarousalOffset ={
        style: {transform:"translateY(" + index * offsetHeight * -1 + "px)"}
    };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () =>{
        return resumeBullets.map((bullet, index)=>(
            <div 
            onClick={()=>handleCarousal(index)}
            className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key={index}>
                <img className='bullet-logo'
                src={require (`../../assets/Resume/${bullet.logoSrc}`)}
                alt="B"/>
                <span className='bullet-label'>{bullet.label}</span>
            </div>
     ))
    }

    const getResumeScreen = ()=>{
        return(
            <div style={carousalOffSetStyle.style}
            className="resume-details-carousal">
                {resumeDetails.map((ResumeDetail)=>ResumeDetail)}
                
            </div>
        )
    }

   
    return(
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Detaile'}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                                <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreen()}</div>
                </div>
            </div>

        </div>
    )
}

export default Resume