import { Link } from "react-router-dom";
import Images from "../images/images.js";

export default function Signup(){
    return(
        <>

        {/* start signup section */}
  <section className="login pb-70 pt-70">
    <div className="container">
      <div className="login_bg">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7">
            <div className="login_box">
              <div className="title text-center">
                <h2 id="login_h4">Signup Now</h2>
              </div>
              <form action="#">
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email" />
                <input type="text" placeholder="Enter Username" />
                <input type="password" placeholder="Enter Password" />
                <a href="#" className="load" id="login_btn">
                  Signup
                </a>
                <div className="forget_link">
                  <p>
                    Already Have an Account? <Link to="/Login">Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="login_img">
              <img src={Images.Sign} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end singup section */}

        </>
    )
}