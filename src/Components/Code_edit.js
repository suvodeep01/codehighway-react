import React from 'react';
import Images from '../images/images.js';

export default function Code_edit(){
    return(
        <>
  {/* start code editor */}
  <section
    className="code_editor pt-70 pb-70"
    style={{ backgroundColor: "#F7F9FB" }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="text-center title">
            <span>Code Editor</span>
            <h2>Online HTML, CSS, JS Runner</h2>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="code_edit_video">
            <video loop autoPlay>
              <source src={Images.code_edit} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="col-12 text-center">
          <a href="#" className="load">
            Try Now
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* end code editor */}
</>

    )
}