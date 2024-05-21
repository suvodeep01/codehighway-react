import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Images from "../images/images.js";


export default function Banner(){

    return(
    <>
  {/* start banner */}
  <section className="slider">
  <OwlCarousel className='owl-theme' loop items={1} dots = {0} autoplay={true}
      autoplayTimeout={4000}
      smartSpeed={1000}>
      <div className="item">
        <div className="over">
          <img
            src= {Images.Slider1}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="item">
        <div className="over">
          <img
            src= {Images.Slider2}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="item">
        <div className="over">
          <img
            src= {Images.Slider3}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </OwlCarousel>
  </section>
  {/* end banner */}
</>
    )
}