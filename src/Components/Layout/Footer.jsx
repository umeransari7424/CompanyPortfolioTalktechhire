import React from "react";
import {RiUserLocationFill} from 'react-icons/ri' 
import {HiMail} from 'react-icons/hi'
import {BiSolidPhone} from 'react-icons/bi'
import {FaFacebookF , FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram } from 'react-icons/bs'
import { RiTwitterXFill } from "react-icons/ri";


function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
      <div className="container-fluid text-center px-5 pt-5">
        <div className="row ">
          <div>
            <img
              src="/Assets/Logo-white-word-PNG.png"
              alt="logo"
              className="img-fluid mb-4 "
              style={{ width: "300px" }}
            />
          </div>
          <br />
          <br />
          <div>
            <h5>
              We are a creative bunch of individuals on the mission to empower{" "}
              <br /> businesses around the globe by leveraging the power of
              technology.
            </h5>
          </div>
        </div>
        <br />

        <div className="row d-flex justify-content-center">
          <div className="col-md-3 text-start ">
            <h4>COMPANY</h4>
            <ul className="list-unstyled " style={{ lineHeight: 2.8 }}>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3 text-start ">
            <h4>SERVICES</h4>
            <ul className="list-unstyled " style={{ lineHeight: 2.8 }}>
              <li>Graphic & UI/UX Design</li>
              <li>Web Design & Development</li>
              <li>Digital Marketing</li>
              <li>SEO</li>
              <li>Content Writing</li>
              <li>HR Solutions</li>
            </ul>

          </div>
          <div className="col-md-3 text-start ">
            <h4>CONTACT</h4>
            <ul className="list-unstyled " style={{ lineHeight: 2.8 }}>
              <li><RiUserLocationFill size={"35px"} /> Islamabad</li>
              <li><BiSolidPhone size={"35px"}/> +92 1234567890</li>
              <li><HiMail size={'35px'}/>  talktechhire@gmail.comm</li> <br />
              <li className="d-flex gap-3"><FaFacebookF size={'35px'} color="white"/> <BsInstagram size={'35px'}/> <RiTwitterXFill size={'35px'}/> <FaLinkedinIn size={'35px'}/></li>
            </ul>
          </div>
        </div>
        <hr />
            <div className="row pt-2 text-center">
                <div>
                    <p>© 2023 TalkTechHire. All Rights Reserved. | <span>Privacy and Compliance</span></p>
                </div>

            </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
