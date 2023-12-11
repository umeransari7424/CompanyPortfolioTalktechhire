import React from "react";

function Digital() {
  return (
    <div className="digital">
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 text-start">
            <div className="p-3">
              <img
                src="/Assets/digitalmarketing.jpg"
                alt="digital"
                className="img-fluid"
                style={{ height: "400px", width: "350px" }}
              />
            </div>
          </div>
          <div className="col-md-5 webdesign">
            <div>
              <h2>
                Unlocking Digital Potential with TalkTechHire's Digital
                Marketing Solutions
              </h2>
            </div>{" "}
            <br />
            <div>
              <h5>
                Supercharge Your Online Presence with TalkTechHire's Digital
                Marketing. We craft data-driven campaigns to boost visibility,
                engagement, and conversions, keeping you ahead in the digital
                marketplace
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Digital;
