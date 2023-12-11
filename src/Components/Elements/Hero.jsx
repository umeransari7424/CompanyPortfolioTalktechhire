import React, { useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';
function Hero() {
  useEffect(() => {
    const typewriter = new Typewriter('.hero1 h1', {
      strings: ['TalkTechHire'],
      autoStart: true,
      loop: true, // Set loop to true for infinite typing
    });
  }, []);
  return (
    <div className="hero overlay">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-5 hero1 text-center">
            <div>
              <h1>TalkTechHire</h1>
            </div>{" "}
            <br />
            <div>
              <h4>
                {/* We are a creative bunch of individuals on the mission to empower
                businesses around the globe by leveraging the power of
                technology. */}
                {/* TalkTechHire is a full-service technology company
                catering to small, medium, and large enterprises across the
                globe. Our team develops effective strategies for
                forward-thinking companies. We have a proven track record in
                providing cutting-edge technology solutions. */}
                Excellent IT services for your success
              </h4>
            </div>{" "}
            <br />
            <div className=" herobtn">
              <div>
              <button className="btn button"><strong>Let's Get Started</strong></button>
              </div>
              <div>
              {/* <button className="btn ">Let's Get Start</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
