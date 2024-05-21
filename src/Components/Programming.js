import Images from "../images/images.js";

export default function Courses(){
    return(
        <>
  {/* start top programming */}
  <section
    className="courses pt-70 pb-70"
    style={{ backgroundColor: "#F7F9FB" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center title">
            <span>Programming</span>
            <h2>Top Programming Languages</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.letter_c} alt="" />
              </div>
              <p>C</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.c} alt="" />
              </div>
              <p>C++</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.c_sharp} alt="" />
              </div>
              <p>C#</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.python} alt="" />
              </div>
              <p>Python</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.java} alt="" />
              </div>
              <p>Java</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.php} alt="" />
              </div>
              <p>Php</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.swift} alt="" />
              </div>
              <p>Swift</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.r} alt="" />
              </div>
              <p>R</p>
            </div>
          </a>
        </div>
        <div className="col-lg-12 text-center">
          <a href="#" className="load" id="view_all">
            View All
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* end top programming */}
</>

    )
}