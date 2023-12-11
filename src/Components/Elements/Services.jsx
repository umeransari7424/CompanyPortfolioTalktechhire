import React from "react";

function Services() {
  return (
    <div className="services">
      <div className="container-fluid px-5 py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 service-col mb-5">
            <div>
              <h6>Who We Are</h6>
            </div>
            <div>
              <h1>Full-Service Web Development Agency</h1>
            </div>
            <div>
              <h5>
                TalkTechHire is a full-service technology company
                catering to small, medium, and large enterprises across the
                globe. Our team develops effective strategies for
                forward-thinking companies. We have a proven track record in
                providing cutting-edge technology solutions.
              </h5>
            </div>
            <br />
            <div>
            <button className="btn "><strong>Explore More</strong></button>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <img src="/Assets/servicesimg.png" alt="services" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
