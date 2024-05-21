import React, { useEffect } from 'react';
import $ from "jquery";
import Images from "../images/images.js";
import { Link } from "react-router-dom";

export default function Header() {

  useEffect(() => {
    $("#open_btn").click(function () {
      $("#open_btn").hide();
      $("#close_btn").show();
      $(".nav-links").show();
    });

    $("#close_btn").click(function () {
      $("#close_btn").hide();
      $("#open_btn").show();
      $(".nav-links").hide();
    });

    // Clean up to avoid memory leaks
    return () => {
      $('#open_btn').off('click');
      $('#close_btn').off('click');
    };
  }, []);

  return (
    <>


      {/* start header */}
      <section className="menu" id="header_menu">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-7">
              <Link to={"/"}>
                <img src={Images.Logo} alt="" className="img-fluid" />
                </Link>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-7 col-sm-7 col-5">
              <div id="hamburger-menu">
                <button className="hamburger-button" id="open_btn">
                  {" "}
                  ☰{" "}
                </button>
                <button className="hamburger-button" id="close_btn">
                  {" "}
                  X{" "}
                </button>
                <div className="nav-links" style={{ display: "none" }}>
                  <Link to="/">Home</Link>
                  <Link to="/About">About Us</Link>
                  <Link to="/Course">Courses</Link>
                  <Link to="/Interview">Interview Q</Link>
                  <Link to="/Contact">Help Desk</Link>
                  <Link to="/Login">Login</Link>
                  <Link to="/Signup">Signup</Link>
                </div>
              </div>
              <ul className="menu-bar">
                <li>
                  <Link to="/">Home</Link>
                </li>
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
            <div className="col-xl-2 col-lg-3 col-md-2 col-12 p-0 m-0">
              <div className="text-right">
                <Link to="/Login" className='sign'>Login</Link>

                <Link to="/Signup" className='sign' id="login_sec">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end header */}



    </>

  )

}

