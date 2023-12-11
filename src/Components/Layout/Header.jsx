import React, { useState, useEffect } from 'react';

function Header() {
  const [isFixed, setIsFixed] = useState(false);

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
    <div className='header'>
        <nav className={`navbar navbar-expand-lg navbar ${isFixed ? 'fixed' : ''}`}>
  <div class="container-fluid mx-4">
    <a class="navbar-brand" href="/">
      <img src="/Assets/tech-talk-white.png" alt="logo"   style={{width:'150px',height:'50px'}}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0 d-flex gap-4" >
        <li class="nav-item dropdown active">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Content Writing</a></li>
            <li><a class="dropdown-item" href="/">Graphic & UI/UX Design</a></li>
            <li><a class="dropdown-item" href="/">Web Design & Development</a></li>
            <li><a class="dropdown-item" href="/">Digital Marketing</a></li>
            <li><a class="dropdown-item" href="/">HR Solutions</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Career</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Contact</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Career</a>
        </li> */}
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header