import { Link } from "react-router-dom";
import Images from "../images/images.js";
import Redirect from "../Components/Redirect.js";

export default function Interview(){
    return(
        <>

            {/* start section banner */}
  <div className="section_banner">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center title">
          <h2>Interview Questions & Answer</h2>
          <ul>
            <li>
              <Link to={"/"}>Home &nbsp;&nbsp;&nbsp;&gt;</Link>
            </li>
            <li>Interview Q</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* end section banner */}


{/* start courses */}
<section className="courses pt-70 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center title">
            <span>Interview Preparation</span>
            <h2>Top Interview Questions &amp; Answer</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-6">
        <Link to={"/Interview_detail"}>
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.html} alt="" />
              </div>
              <p>Html5</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
        <Link to={"/Interview_detail"}>
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.swift} alt="" />
              </div>
              <p>Swift</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link to={"/Interview_detail"}>
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.r} alt="" />
              </div>
              <p>R</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link to={"/Interview_detail"}>
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.java} alt="" />
              </div>
              <p>Java</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link to={"/Interview_detail"}>
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.letter_c} alt="" />
              </div>
              <p>C</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link to={"/Interview_detail"}>
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.css} alt="" />
              </div>
              <p>Css3</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link to={"/Interview_detail"}>
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.js} alt="" />
              </div>
              <p>JavaScript</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link to={"/Interview_detail"}>
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.bootstrap} alt="" />
              </div>
              <p>Bootstrap</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link to={"/Interview_detail"}>
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.python} alt="" />
              </div>
              <p>Python</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link to={"/Interview_detail"}>
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.c} alt="" />
              </div>
              <p>C++</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link to={"/Interview_detail"}>
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.c_sharp} alt="" />
              </div>
              <p>C#</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link to={"/Interview_detail"}>
            <div className="cbox">
              <div className="c-icon">
                <img src={Images.github} alt="" />
              </div>
              <p>Github</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* end courses */}

    {/* add component */}
        <Redirect/>
        </>
    )
}