import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import icons
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Video(){
    return(
        <>
  {/* start video section */}
  <section className="pt-70 pb-70 video-sec">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="position-relative d-inline-block play mb-5">
            <a href="" target="_self">
              <div className="play-box">
              <FontAwesomeIcon className="play-box-i" icon={faPlay} />
              </div>
            </a>
          </div>
          <div className="text-center title">
            <h2 className="text-white mb-0 video-section-h2">
              WEB DESIGN &amp; DEVLOPMENT COURSE
            </h2>
            <a href="#" className="join-now mt-4">
              Join us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end video section */}
</>

    )
}