import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isFixed, setIsFixed] = useState(false);


  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => {
    setIsNavOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleScroll = () => {
    setIsFixed(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isFixed ? 'fixed' : ''}`}>
      <div className='offcanvasnavbar'>
        <nav className={`navbar navbar-light fixed-top header ${isFixed ? 'fixed' : ''}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/Assets/tech-talk-white.png" alt="logo" style={{ width: '150px', height: '50px' }} />
            </a>
            <button class="navbar-toggler" type="button" onClick={toggleNav} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`offcanvas offcanvas-start  ${isNavOpen ? 'show' : ''}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <a class="navbar-brand" href="/">
                  <img src="/Assets/tech-talk-white.png" alt="logo" style={{ width: '140px', height: '50px' }} />
                </a>        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">

                    <a class="nav-link active" aria-current="page" href='#hero' onClick={closeNav}>Home</a>

                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#aboutus" onClick={closeNav}>About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#services" onClick={closeNav}>Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" onClick={closeNav} href='#contactus'>Contact Us</a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className='main-header'>
        <nav className="navbar navbar-expand-lg navbar ">
          <div className="container-fluid mx-4">
            <a className="navbar-brand" href="/">
              <img src="/Assets/tech-talk-white.png" alt="logo" style={{ width: '150px', height: '50px' }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0 d-flex gap-4" >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href='#hero'>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#aboutus">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#services">Services</a>
                </li>
                <li className="nav-item">

                  <a className="nav-link active" aria-current="page" href='#contactus' >Contact Us</a>

                </li>
                {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Career</a>
        </li> */}

              </ul>

            </div>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Header