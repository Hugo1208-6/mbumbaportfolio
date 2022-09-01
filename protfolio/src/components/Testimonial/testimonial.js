import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import img from '../Home/bg-1.jpg'
import shape from "../../assets/shape-bg.png";
import './Testimonial.css'
function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const option={
      loop: true,
      margin:0,
      nav: true,
      animatin: "bounceInRight",
      animateOut: "bounceOutRight",
      dots: true,
      autoplay:true,
      smartSpeed:100,
      responsive:{
        0:{
          items:1,
        },
        768:{
          items:1,
        },
        1000:{
          items:3,
        },
       
      }
    }
  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What the people I have worked for say about me"}
      />
      <section className="testimonial-section " id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel"{...option}>
              <div className="col-md-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                      Hugues Mbumba was one of my players. He was a good example to his teammates and classmates. His work ethic is unbelievable. 
                      He is always excited to learn new things, as he is also teachable. He is very honest
                      and punctual. I have no doubt that he will fit in any environment.
                        <i className="fa fa-quote-right"/>
                    </p>
                   <ul className="stars list-unstyled">
                     <li>
                        <i className="fa fa-star"/>
                     </li>
                     <li>
                        <i className="fa fa-star"/>
                     </li>
                     <li>
                        <i className="fa fa-star"/>
                     </li>
                     <li>
                        <i className="fa fa-star-half-alt"/>
                     </li>
                     <li>
                        <i className="fa fa-star"/>
                     </li>
                   </ul>
                  </div>
                  <div className="client-info">
                    <img src="img/Testimonial/coach_briggs.jpg" alt=""/>
                    <h5> Coach Briggs</h5>
                    <p>Coach of Georgetown College</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                      I supervised and coached Hugues Mbumba. He is a phenomenal hard worker and quick learner. I
                      honestly fell in love with the work he has done for our program as a student and as member of our basketball team.
                      I will recommend him to anyone who is looking for a motivated employee.
                        <i className="fa fa-quote-right"/>
                    </p>
                   <ul className="stars list-unstyled">
                     <li>
                        <i className="fa fa-star"/>
                     </li>
                     <li>
                        <i className="fa fa-star"/>
                     </li>
                     <li>
                        <i className="fa fa-star"/>
                     </li>
                     <li>
                        <i className="fa fa-star-half-alt"/>
                     </li>
                     <li>
                        <i className="fa fa-star"/>
                     </li>
                   </ul>
                  </div>
                  <div className="client-info">
                    <img src="img/Testimonial/coach_watson.jpg"alt='bb'/>
                    <h5> Rodney Watson</h5>
                    <p> Basketball Coach of USI </p>

                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                      Hugues Mbumba was my student. He has a good work ethic and is also a good learner. Him and his team worked on implementing a digital signature.
                      Hugues was a good contributor in the project, as
                      he made good research and created good components.



                        <i className="fa fa-quote-right"/>
                    </p>
                   <ul className="stars list-unstyled">
                     <li>
                        <i className="fa fa-star"/>
                     </li>
                     <li>
                        <i className="fa fa-star"/>
                     </li>
                     <li>
                        <i className="fa fa-star"/>
                     </li>
                     <li>
                        <i className="fa fa-star-half-alt"/>
                     </li>
                     <li>
                        <i className="fa fa-star"/>
                     </li>
                   </ul>
                  </div>
                  <div className="client-info">
                    <img src="img/Testimonial/gyan.jpg" alt='bb'/>
                    <h5> Dr. Gongjun Yan</h5>
                    <p>Associate Professor of Computer Science</p>

                  </div>
                </div>
              </div>
             
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}

export default Testimonial;
