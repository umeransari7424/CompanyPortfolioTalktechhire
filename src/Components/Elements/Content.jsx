import React from "react";

function Content() {
  return (
    <div className="content">
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 webdesign">
            <div>
              <h2>Content Excellence with TalkTechHire's Writing Services</h2>
            </div>{" "}
            <br />
            <div>
              <h5>
                Engage Your Audience with TalkTechHire's Content Writing. We
                create compelling, brand-tailored content that captivates and
                inspires, helping you connect with your audience and achieve
                success
              </h5>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <div className="p-3">
              <img
                src="/Assets/contentwriting.jpg"
                alt="aboutus"
                className="img-fluid"
                style={{ height: "400px", width: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
