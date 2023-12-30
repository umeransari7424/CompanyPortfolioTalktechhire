import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from 'react-icons/fa6'
import { BiLogoGmail } from 'react-icons/bi'
// import { FaInstagramSquare } from "react-icons/fa";
import { FloatingLabel, Form } from "react-bootstrap";
import { RiTwitterXFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";



function Contactus() {
  return (
    <div className="contactus" id="contactus">
      <div className="container-fluid text-center py-5 mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card card1  ">
              <div className="d-flex justify-content-around contact-detail">
                <div>
                  <div className="d-flex gap-4  py-3">
                    <div className="rocket">
                      <FaLocationDot size={"30px"} className="rocicon" />
                    </div>
                    <div className="text-start">
                      <div>
                        <h4> Address</h4>
                      </div>
                      <div>
                        <h6>ISLAMABAD,PAKISTAN</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex  gap-4 py-3">
                    <div className="rocket">
                      <BsFillTelephoneFill size={"30px"} className="rocicon" />
                    </div>
                    <div className="text-start">
                      <div>
                        <h4>Phone</h4>
                      </div>
                      <div>
                        <h6>+92 1234567890</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex  gap-4 py-3">
                    <div className="rocket">
                      <BiLogoGmail size={"30px"} className="rocicon " />
                    </div>
                    <div className="text-start">
                      <div>
                        <h4>E-Mail</h4>
                      </div>
                      <div>
                        <h6>Talktechhire@gmail.com</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row contact-row">
          <div className="col-md-5 pt-5 text-start ">
            <div className="contact">
              <div>
                <span className='working'>Contact Us</span>
              </div>
              <div>
                <h1>Write Us Any Message</h1>
              </div> <br />
              <div>
                <h5>These are the phrases we stay via way of means of in the whole lot we do.
                  Each brand we build, and we create.</h5>
              </div>
              <br />
              <div>
                <div class="social-links">
                  <div id="twitter" class="social-btn flex-center">
                    <FaFacebookF size={30}/>
                    <span>@example</span>
                  </div>

                  <div id="linkedin" class="social-btn flex-center">
                    <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg><span>in/example</span>
                  </div>

                  <div id="github" class="social-btn flex-center">
                    <RiTwitterXFill size={30}/>
                    <span>in/example</span>
                  </div>
                  <div id="instagram" class="social-btn flex-center">
                    <GrInstagram size={30} />
                    <span>example</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 pt-5 text-start mt-5">
            <div className="d-flex gap-4 ract-input">
            <div className="w-100">
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3 myinput"
            >
              <Form.Control type="text" placeholder="Name"  />
            </FloatingLabel>
            </div>
            <div className="w-100">
            <FloatingLabel
              controlId="floatingInput"
              label="Your Subject"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Your Subject" />
            </FloatingLabel>
            </div>
            </div>
            <div className="d-flex gap-4 ract-input">
            <div className="w-100">
            <FloatingLabel
              controlId="floatingInput"
              label="Your Email"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Your Email" />
            </FloatingLabel>
            </div>
            <div className="w-100">
            <FloatingLabel
              controlId="floatingInput"
              label="Your Number"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Your Number" />
            </FloatingLabel>
            </div>

            </div>
            <div>
            <div className="w-100">
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '130px' }}
        />
      </FloatingLabel>
            </div>
            
              </div> <br />
            <div  className="d-flex justify-content-end"> 
            <button className="sendbutton">
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
