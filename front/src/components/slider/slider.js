import "./slider.min.css"; 
import "./slider-theme.min.css";

import React from "react";
import Slider from "react-slick";

import "./style.scss"

function Slide (){
    const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            rows: 1,
            slidesPerRow: 1,
            responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
                }
            }
            ]
    }

    return(
      <Slider {...settings}>
        <div >
          <img src='/images/hamburger-gourmet.jpg' alt="menu burger avec coca" />
        </div>
        <div >
            <img src='/images/hamburger-noir.jpg' alt="burger au boeuf et laitue" />
        </div>
        <div >
          <img src='/images/hamburger-double.jpg' alt="burger au boeuf et laitue" />
        </div>
        <div >
          <img src='/images/hamburger-poulet.jpg' alt="burger au boeuf et laitue" />
        </div>
        <div >
          <img src='/images/hamburger-just-eat.jpg' alt="burger au boeuf et laitue" />
        </div>
      </Slider>
    )
}
export default Slide
