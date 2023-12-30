import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function Chooseus() {

  const carouselRef = useRef(null);

  const goToPrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const goToNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <div className='chooseus my-5'>
      <div className="container-fluid my-5">
        <div className="row justify-content-end " >
          <div className="col-md-7 choose px-4">
            <div className=' pt-5'>
              <div>
                <span className='why'>Why Choose Us</span>
              </div>
              <div>
                <h2>
                  We are building a sustainable future
                </h2>
              </div>

              <div>
                <h6>Tremendous involvement with power departure, land master curement, liaisoning and working with state. An ideal mix of worldwide experience and skill to additional our attention on innovation.</h6>
              </div> <br />

            </div>
            <div className="row">
              <div className="carousal-container">
                <Carousel
                  ref={carouselRef}
                  responsive={responsive}
                  autoPlay="true"
                  interval={2000}
                  infinite="true"
                  arrows={false}
                >
                  <div class="card mx-2" >
                    <div class="card-body">
                      <h5 class="card-title"><img src="/Assets/web1.png" alt="webicon" /></h5>
                      <h4 class="card-subtitle my-2 text-muted">Web Development</h4>
                      <p class="card-text">Bring your ideas to life online with our expert web development services. We specialize in creating responsive and dynamic websites that captivate your audience and drive results</p>
                    </div>
                  </div>

                  <div class="card "  >
                    <div class="card-body">
                      <h5 class="card-title"><img src="/Assets/mobile1.png" alt="webicon" /></h5>
                      <h4 class="card-subtitle my-2 text-muted">Mobile App Development</h4>
                      <p class="card-text">We provide stellar mobile app development services and are top of the league when it comes to iOS, Android, and hybrid app development.</p>
                    </div>
                  </div>
                  <div class="card "  >
                    <div class="card-body">
                      <h5 class="card-title"><img src="/Assets/seo1.png" alt="webicon" /></h5>
                      <h4 class="card-subtitle my-2 text-muted">SEO</h4>
                      <p class="card-text">Boost your online visibility and rankings with our strategic SEO services. We optimize your digital content to ensure it stands out in search engine results, driving organic traffic to your site.</p>
                    </div>
                  </div>
                  <div class="card "  >
                    <div class="card-body">
                      <h5 class="card-title"><img src="/Assets/content1.png" alt="webicon" /></h5>
                      <h4 class="card-subtitle my-2 text-muted">Content Writiong</h4>
                      <p class="card-text">Engage your audience with compelling and tailored content. Our skilled writers create content that resonates with your brand, conveying your message effectively across various platforms</p>
                    </div>
                  </div>
                  <div class="card "  >
                    <div class="card-body">
                      <h5 class="card-title"><img src="/Assets/digital2.png" alt="webicon" /></h5>
                      <h4 class="card-subtitle my-2 text-muted">Digital Marketing</h4>
                      <p class="card-text">Propel your brand into the digital spotlight with our comprehensive digital marketing solutions. From social media strategies to targeted campaigns, we enhance your online presence and drive conversions.</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title"><img src="/Assets/hr1.png" alt="webicon" /></h5>
                      <h4 class="card-subtitle my-2 text-muted">HR Solution</h4>
                      <p class="card-text">Elevate your workforce with our comprehensive HR solutions. From talent acquisition to employee engagement, we tailor strategies that align with your business goals</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title"><img src="/Assets/uiux1.png" alt="webicon" /></h5>
                      <h4 class="card-subtitle my-2 text-muted">UIUX</h4>
                      <p class="card-text">Transform your brand aesthetic with our cutting-edge design solutions. Our team crafts visually stunning graphics and ensures a seamless user experience for your digital presence.</p>
                    </div>
                  </div>
                </Carousel>
              </div>
              <div className="arrow-navigation gap-2">
                <div>
                  <div className="arrow-left pb-1" onClick={goToPrevSlide}>
                    <BsArrowLeft size={'30px'} className="pt-1 arrow" />
                  </div>
                </div>
                <div>
                  <div className="arrow-right pb-1" onClick={goToNextSlide}>
                    <BsArrowRight size={'30px'} className="pt-1 arrow" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Chooseus