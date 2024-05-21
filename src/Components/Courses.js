import Images from "../images/images.js";

export default function Courses(){
    return(
        <>
  {/* start courses */}
  <section className="courses pt-70 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center title">
            <span>Courses</span>
            <h2>our top courses</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src = {Images.html} alt="" />
              </div>
              <p>Html5</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src = {Images.css} alt="" />
              </div>
              <p>Css3</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src = {Images.js} alt="" />
              </div>
              <p>JavaScript</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src = {Images.bootstrap} alt="" />
              </div>
              <p>Bootstrap</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src = {Images.python} alt="" />
              </div>
              <p>Python</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src = {Images.c} alt="" />
              </div>
              <p>C++</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src = {Images.c_sharp} alt="" />
              </div>
              <p>C#</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <a href="#">
            <div className="cbox">
              <div className="c-icon">
                <img src = {Images.github} alt="" />
              </div>
              <p>Github</p>
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
  {/* end courses */}
</>

    )
}