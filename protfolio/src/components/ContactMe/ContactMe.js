import React,{useState }from 'react'
import imgBack from '../../images/mailz.jpeg'
import load1 from '../../images/load2.gif'
import Animations from'././../../utilities/Animation'
import ScrollService from './../../utilities/ScrollService'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Typical from 'react-typical'
import './ContactMe.css'
import axios from "axios";
import { toast } from "react-toastify";
import Footer from '../../assets/Home/footer/Footer'
function ContactMe(props) {

   let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !==props.id)
        return;

        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName]= useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner ]= useState("")
    const [bool, setBool]= useState(false)

    const handleName = (e) =>{
      setName(e.target.value);
    };
    const handleEmail = (e) =>{
      setEmail(e.target.value);
    };
    const handleMessage = (e) =>{
      setMessage(e.target.value);
    };
console.log(name);
    const submitForm = async (e)=>{
      e.preventDefault();
      try {
      let data = {
        name,
        email,
        message,
      };
      
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return( 
 <div className='main-container fade-out' id={props.id|| ''}>
  <ScreenHeading
  subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
  <div className='central-form'>
    <div className='col'>
         <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>
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
    <div className='back-form'>
      <div className='img-back'>
        <h4> send tour Email Here!</h4>
        <img src={imgBack} alt=" not found" />
      </div>
      <form onSubmit={submitForm}>
        <p>{banner}</p> 
        <label htmlFor='name'>Name</label>
        <input type='text'
        onChange={handleName} value={name}/>

        <label htmlFor='email'>Email</label>
        <input type='text'
         onChange={handleEmail} value={email}/>

        <label htmlFor='message'>Message</label>
        <textarea type='text'
         onChange={handleMessage} value={message}/>

        <div className='send-btn'> 
        <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
        </div>
      </form>
    </div>
  </div>
   <Footer />
 </div>
  )
}

export default ContactMe