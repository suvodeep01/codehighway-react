import React from "react";
import Images from '../images/images.js';

export default function Redirect(){
    return(
        <>
  {/* start redirect section */}
  <section className="redirect">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-5 col-md-6 col-sm-7">
          <div className="redirect_text">
            <h3>
              Join Over 50 million learners and start learn C++ : Classes and
              Objects Today and Level Up your Career
            </h3>
            <a href="#" className="load" id="redirect_btn">
              Start
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-5 col-8">
          <div className="redirect_img">
            <img src={Images.redirect_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end redirect section */}
</>

    )
}