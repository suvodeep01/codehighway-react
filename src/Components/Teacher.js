import Images from '../images/images.js';

export default function Teacher(){
    return(
        <>
  {/* start teacher */}
  <section className="tools pt-70 pb-70" style={{ backgroundColor: "#F7F9FB" }}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="col-12">
            <div className="text-center title">
              <span>teachers</span>
              <h2>Our Top Teachers</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="teacher-box">
            <div className="teacher-image">
              <img src={Images.Teacher1} alt="" className="img-fluid" />
            </div>
            <div className="teacher-info">
              <h2>Konne Backfield</h2>
              <span>Designer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="teacher-box">
            <div className="teacher-image">
              <img src={Images.Teacher2} alt="" className="img-fluid" />
            </div>
            <div className="teacher-info">
              <h2>Nashid Martines</h2>
              <span>Developer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="teacher-box">
            <div className="teacher-image">
              <img src={Images.Teacher3} alt="" className="img-fluid" />
            </div>
            <div className="teacher-info">
              <h2>Nashid Martines</h2>
              <span>Manager</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="teacher-box">
            <div className="teacher-image">
              <img src={Images.Teacher4} alt="" className="img-fluid" />
            </div>
            <div className="teacher-info">
              <h2>Nashid Martines</h2>
              <span>Director</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end teacher */}
</>

    )
}