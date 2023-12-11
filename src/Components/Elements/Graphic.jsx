import React from "react";

function Graphic() {
  return (
    <div className="graphic">
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 text-start">
            <div className="p-3">
              <img
                src="/Assets/grapicdesigner.jpg"
                alt="digital"
                className="img-fluid"
                style={{ height: "400px", width: "350px" }}
              />
            </div>
          </div>
          <div className="col-md-5 webdesign">
            <div>
              <h2>
              Elevate User Experience with TalkTechHire's Graphic and UI/UX Design
              </h2>
            </div>{" "}
            <br />
            <div>
              <h5>
                Enhance UX with TalkTechHire's Graphic & UI/UX Design. We craft
                visually stunning and user-friendly digital experiences that
                leave a lasting impact and keep your audience engaged.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphic;
