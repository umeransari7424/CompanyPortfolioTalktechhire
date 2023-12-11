import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import {FaLocationDot} from 'react-icons/fa6'
import { BiLogoGmail } from 'react-icons/bi'

function Contactus() {
  return (
    <div className="contactus">
      <div className="container text-center py-5 mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card p-4 ">
             <div className="d-flex justify-content-between contact-detail">
             <div>
                <div className="d-flex justify-content-center ">
                  <div className="rocket">
                    <FaLocationDot size={"30px"} className="rocicon" />
                  </div>
                </div>
                <div>
                  <div>
                    <h2> Address</h2>
                  </div>
                  <div>
                    <h5>ISLAMABAD</h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-center">
                  <div className="rocket">
                    <BsFillTelephoneFill size={"30px"} className="rocicon" />
                  </div>
                </div>
                <div>
                  <div>
                    <h2>Phone</h2>
                  </div>
                  <div>
                    <h5>+92 1234567890</h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-center">
                  <div className="rocket">
                    <BiLogoGmail size={"30px"} className="rocicon " />
                  </div>
                </div>
                <div>
                  <div>
                    <h2>E-Mail</h2>
                  </div>
                  <div>
                    <h5>Talktechhire@gmail.com</h5>
                  </div>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
