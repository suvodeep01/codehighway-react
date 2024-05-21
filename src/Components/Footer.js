import React from "react";
import Images from '../images/images.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import icons
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* start footer */}
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="footer_logo">
                <Link to={"/"}>
                  <img src={Images.Logo} alt="" />
                </Link>
              </div>
              <div className="footer_txt">
                <h6>
                  Codehighway is optimized for learning and training. Examples might
                  be simplified to improve reading and learning. Tutorials and
                  examples are constantly reviewed to avoid errors.While using
                  Codehighway, you agree to have read and accepted our terms of use,
                  cookie and privacy policy.
                </h6>
                {/* <a href="#" class="load" id="footer_btn">Join Us</a> */}
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="footer_links">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <Link to="/About">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Course">Courses</Link>
                  </li>
                  <li>
                    <Link to="/Interview">Interview Q</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Help Desk</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="footer_links">
                <h4>Top Courses</h4>
                <ul>
                  <li>
                    <a href="#">Programming Languages</a>
                  </li>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">Software Development</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="social_links">
                <h4>Let's Chat</h4>
                <a href="mailto:codehighwayhelp@gmail.com">
                  codehighwayhelp@gmail.com
                </a>
                <a href="tel:7003521085">+917003521085</a>
                <div className="social_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon className="social_icon_i" icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon className="social_icon_i" icon={faWhatsapp} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon className="social_icon_i" icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon className="social_icon_i" icon={faInstagram} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end footer */}

      {/* start copyright */}
      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright_txt text-center">
                <p>© Codehighway All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end copyright */}

    </>

  )
}