import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import icons
import { faDiscord} from '@fortawesome/free-brands-svg-icons';
import { faTelegram} from '@fortawesome/free-brands-svg-icons';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';

export default function Contact(){
    return(
        <>
        {/* start section banner */}
  <div className="section_banner">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center title">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <Link to={"/"}>Home &nbsp;&nbsp;&nbsp;&gt;</Link>
            </li>
            <li>Help Desk</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* end section banner */}


<>
  {/* start contact us */}
  <section className="contact pt-70 pb-70">
    <div className="container-fluid">
      <div className="row p-0 justify-content-center align-items-center">
        <div className="col-lg-5 p-0">
          <div className="contact_left_box">
            <div className="title">
              <h2>Let's Chat</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quo officiis ipsa? Architecto nisi quia eius eaque. Voluptatum,
                incidunt nobis.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fuga, amet. Nulla ratione ullam voluptatem
                obcaecati!
              </p>
              <div className="social_icon">
                <ul>
                  <li>
                  <a href="#">
                  <FontAwesomeIcon className="social_icon_i" icon={faTelegram} />
                  </a>
                  </li>
                  <li>
                  <a href="#">
                  <FontAwesomeIcon className="social_icon_i"   icon={faDiscord} />
                  </a>
                  </li>
                  <li>
                  <a href="#">
                  <FontAwesomeIcon className="social_icon_i"  icon={faGoogle} />
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="contact_form">
            <form action="#">
              <input type="text" placeholder="Enter Name" />
              <input type="text" placeholder="Enter Email" />
              <textarea
                cols={10}
                rows={4}
                placeholder="Enter Message"
                id="contact_textarea"
                defaultValue={""}
              />
              <a href="#" className="load" id="redirect_btn">
                Submit
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end contact us */}
</>


        </>
    )
}