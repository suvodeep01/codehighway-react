import { Link } from "react-router-dom";
// import components
import Courses from "../Components/Courses.js";
import Programming from "../Components/Programming.js";
import Career from "../Components/Career.js";

export default function Course(){
    return(
        <>

        {/* start section banner */}
  <div className="section_banner">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center title">
          <h2>Our Courses</h2>
          <ul>
            <li>
              <Link to={"/"}>Home &nbsp;&nbsp;&nbsp;&gt;</Link>
            </li>
            <li>Courses</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* end section banner */}

{/* add compoments section */}
<Courses />
<Programming />
<Career />
</>
    )
}