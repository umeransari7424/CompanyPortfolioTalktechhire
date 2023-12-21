import React from "react";
import { FaGitter } from "react-icons/fa6";

function Aboutus() {
  return (
    <div className="aboutus" id="aboutus">
      <div className="container py-5 ">
        <div className="row ">
          <div className="col-md-6 pt-4">
            <div>
              <span>About Us</span>
            </div>
            <div>
              <h1>We’re Delivering The Best Customer Experience</h1>
            </div>
            <br />
            <div className="card py-3 px-2">
              <div className="d-flex gap-4">
                <div className="d-flex justify-content-center pt-2  ">
                  <FaGitter className="about-icon p-2"   color="white" size={55}/>
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>Our Mission is to be the industry’s top-ratede provider issuer enterprise targeting satisfying the most to our clients.</p>
                </div>

              </div>  
            </div>
            <br />
            <div className="card py-3 px-2">
              <div className="d-flex gap-4">
                <div className="d-flex justify-content-center pt-2  ">
                  <FaGitter className="about-icon p-2"   color="white" size={55}/>
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>Our Mission is to be the industry’s top-ratede provider issuer enterprise targeting satisfying the most to our clients.</p>
                </div>

              </div>  
            </div>

            {/* <div>
              <h5>
                TalkTechHire is your dynamic IT partner, offering a full
                spectrum of digital services. We excel in web design,
                development, and digital marketing, enhancing your online
                presence. Our content creation captivates your audience. With
                expertise in graphics and UI/UX, we craft stunning,
                user-friendly experiences. We streamline HR solutions to find
                and retain top talent. Choose TalkTechHire for digital success.
              </h5>
            </div> */}
          </div>
          <div className="col-md-6">
            <div className="p-3 about1">
              <img
                src="/Assets/about1.jpg"
                alt="aboutus"
                className="img-fluid"
              />
              <div className="about11">
              <img
                src="/Assets/about1.1.jpg"
                alt="aboutus"
                className="img-fluid"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
