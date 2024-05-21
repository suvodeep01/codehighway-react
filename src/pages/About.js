import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import icons
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Images from "../images/images.js";

export default function About() {
    return (
        <>

            {/* start section banner */}
            <div className="section_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center title">
                                <h2>About Us</h2>
                                <ul>
                                    <li>
                                        <Link to="/">Home &nbsp;&nbsp;&nbsp;&gt; </Link>
                                    </li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end section banner */}

            {/* start about us */}
            <section className="about pb-70 pt-70">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="title about_txt">
                                <span>About Us</span>
                                <h2>Weclome to Codehighway</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                                    iure facilis aliquid esse quos facere. Reprehenderit pariatur
                                    excepturi distinctio ipsam voluptatum, tempora rerum reiciendis,
                                    modi ex repellat, ea praesentium tempore. Lorem ipsum dolor sit,
                                    amet consectetur adipisicing elit. Ea, pariatur! Lorem ipsum dolor
                                    sit amet consectetur, adipisicing elit. Repellendus nisi ad earum
                                    et recusandae nostrum!
                                </p>
                                <a href="#" className="load" id="redirect_btn">
                                    Join Now
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="about_img">
                                <img
                                    src={Images.about_banner}
                                    alt=""
                                    style={{ mixBlendMode: "darken" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about us */}

            {/* start mission & visison */}
            <section className="mission_vision pt-70 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="about_txt" id="mission_box">
                                <h2>Our Mission</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Quibusdam totam quos unde numquam facilis, fuga voluptas ipsum
                                    modi cupiditate nihil ea nobis minus et veniam, voluptatibus,
                                    culpa atque labore ut. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo, soluta. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Id sit laboriosam a sed nostrum
                                    dolorem ipsam blanditiis quis nemo libero!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about_txt" id="mission_box">
                                <h2>Our Vision</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Quibusdam totam quos unde numquam facilis, fuga voluptas ipsum
                                    modi cupiditate nihil ea nobis minus et veniam, voluptatibus,
                                    culpa atque labore ut. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nemo, soluta. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Id sit laboriosam a sed nostrum
                                    dolorem ipsam blanditiis quis nemo libero!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* mission & visison */}


            {/* Start how works */}
  <section className="text-center pos-r pt-70 pb-70" id='about_join_bg'>
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-6 col-md-10 ml-auto mr-auto">
          <div className="text-center title">
            <span>Join us</span>
            <h2>Start your journey</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div id="svg-container">
          <svg
            id="svgC"
            width="100%"
            height="100%"
            viewBox="0 0 620 120"
            preserveAspectRatio="xMidYMid meet"
          >
            <desc>Created with Snap</desc>
            <defs />
            <path
              d="M62.9 14.9c-25-7.74-56.6 4.8-60.4 24.3-3.73 19.6 21.6 35 39.6 37.6 42.8 6.2 72.9-53.4 116-58.9 65-18.2 191 101 215 28.8 5-16.7-7-49.1-34-44-34 11.5-31 46.5-14 69.3 9.38 12.6 24.2 20.6 39.8 22.9 91.4 9.05 102-98.9 176-86.7 18.8 3.81 33 17.3 36.7 34.6 2.01 10.2.124 21.1-5.18 30.1"
              id="squiggle"
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokemiterlimit={10}
              strokedashoffset={180}
              style={{
                strokeWidth: 1,
                strokeDasharray: "5, 10",
                strokeDashoffset: 10
              }}
            />
            <g transform="matrix(0.2956,-0.9553,0.9553,0.2956,43.2367,24.8965)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,557,57)" />
            <g transform="matrix(-0.8615,-0.5077,0.5077,-0.8615,577.307,92.5386)">
              <polyline
                points="0, 30, 15, 0, 30, 30"
                id="plane"
                fill="rgba(0,0,0,0.05)"
              />
            </g>
          </svg>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="work-process">
            <div className="step-num-box">
              <div className="step-icon">
                <span>
                <FontAwesomeIcon icon={faLightbulb} />
                </span>
              </div>
              <div className="step-num">01</div>
            </div>
            <div className="step-desc">
              <h4>Research Project</h4>
              <p className="mb-0">
                Nostrud exercitat ullamco lorem ipsum dolor sit amet, consece
                adipising elit, sed doeo eiusmod
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 md-mt-5">
          <div className="work-process">
            <div className="step-num-box">
              <div className="step-icon">
                <span>
                <FontAwesomeIcon icon={faRocket} />
                </span>
              </div>
              <div className="step-num">02</div>
            </div>
            <div className="step-desc">
              <h4>Targeting</h4>
              <p className="mb-0">
                Nostrud exercitat ullamco lorem ipsum dolor sit amet, consece
                adipising elit, sed doeo eiusmod
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 md-mt-5">
          <div className="work-process">
            <div className="step-num-box">
              <div className="step-icon">
                <span>
                <FontAwesomeIcon icon={faSquareCheck} />
                </span>
              </div>
              <div className="step-num">03</div>
            </div>
            <div className="step-desc">
              <h4>Result</h4>
              <p className="mb-0">
                Nostrud exercitat ullamco lorem ipsum dolor sit amet, consece
                adipising elit, sed doeo eiusmod
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end how works */}

        </>


    )
}

