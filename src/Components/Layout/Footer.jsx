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
       
     

        <div className="row d-flex justify-content-around">
        <div className="col-md-3 text-start">
          <div>
            <img
              src="/Assets/Logo-white-word-PNG.png"
              alt="logo"
              className="img-fluid mb-4 "
              style={{ width: "200px" }}
            />
          </div>
  
          <div>
            <h5>
              We are a creative bunch of individuals on the mission to empower businesses around the globe by leveraging the power of
              technology.
            </h5>
          </div>
        </div>
          <div className="col-md-2 text-start ">
            <h4>COMPANY</h4>
            <ul className="list-unstyled " style={{ lineHeight: 2.8 }}>
              <li ><a href='#hero'>Home</a></li>
              <li><a href="#aboutus">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href='#contactus'>Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3 text-start ">
            <h4>SERVICES</h4>
            <ul className="list-unstyled " style={{ lineHeight: 2.8 }}>
              <li>Web & Mobile Development</li>
              <li>Digital Marketing</li>
              <li>Content Writing</li>
              <li>UI/UX Design</li>
              <li>HR Solutions</li>
              <li>SEO</li>
            </ul>

          </div>
          <div className="col-md-3 text-start ">
            <h4>CONTACT</h4>
            <ul className="list-unstyled " style={{ lineHeight: 2.8 }}>
              <li><RiUserLocationFill size={"35px"} /> Islamabad</li>
              <li><BiSolidPhone size={"35px"}/> +92 1234567890</li>
              <li><HiMail size={'35px'}/> talktechhire@gmail.com</li> <br />
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
