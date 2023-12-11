import React from "react";

function Web() {
  return (
    <div className="web">
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 webdesign">
            <div>
              <h2>
                Elevating Digital Presence Through Expert Web Design &
                Development
              </h2>
            </div>{" "}
            <br />
            <div>
              <h5>
                At TalkTechHire, we're web design experts. Our team blends
                aesthetics and functionality to create user-friendly, responsive
                websites. Whether you need a simple site or a complex e-commerce
                platform, we exceed your expectations with cutting-edge
                solutions
              </h5>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <div className="p-3">
              <img
                src="/Assets/web.jpg"
                alt="aboutus"
                className="img-fluid"
                style={{ height: "400px", width:'300px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web;
