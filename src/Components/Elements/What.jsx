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
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function What() {
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
    <div className="what">
      <div className="what1">
        <div className="container-fluid  py-5 ">
          <div className="row text-center pb-5">
            <div>
              <h6 className="whatwedo">What We Do</h6>
            </div> 
            <div>
              <h1>Services We Offer</h1>
            </div>
            <div>
              <h4>Our modest list of services to suit all your digital needs.</h4>
            </div>
          </div>
          <div className="row d-flex justify-content-center text-center carousal-row">
            <div className="carousal-container">
              <Carousel
                ref={carouselRef}
                responsive={responsive}
                autoPlay="true"
                interval={2000}
                infinite="true"
                // rewind={true}
                // axis="horizontal"
                // labels={false}
                // customTransition="all .35"
                // transitionDuration={500}
                // autoPlaySpeed={1000}
                arrows={false}
              // showStatus={false}
              // showIndicators={false}
              // showThumbs={false} 

              >
                <div class="card mx-1" >
                  <img src="/Assets/uiux-carousal.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="service-icon">
                      <img src="/Assets/service-icon.svg" alt="service" className="img-fluid " decoding="async" />
                    </div>
                    <div className="service-title">
                      <h3>UI/UX</h3>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Learn More</span>
                    </button>
                  </div>
                </div>
                <div class="card mx-1" >
                  <img src="/Assets/uiux-carousal.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="service-icon">
                      <img src="/Assets/service-icon.svg" alt="service" className="img-fluid " decoding="async" />
                    </div>
                    <div className="service-title">
                      <h3>UI/UX</h3>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Learn More</span>
                    </button>
                  </div>
                </div>
                <div class="card mx-1" >
                  <img src="/Assets/uiux-carousal.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="service-icon">
                      <img src="/Assets/service-icon.svg" alt="service" className="img-fluid " decoding="async" />
                    </div>
                    <div className="service-title">
                      <h3>UI/UX</h3>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Learn More</span>
                    </button>
                  </div>
                </div>
                <div class="card mx-1" >
                  <img src="/Assets/uiux-carousal.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="service-icon">
                      <img src="/Assets/service-icon.svg" alt="service" className="img-fluid " decoding="async" />
                    </div>
                    <div className="service-title">
                      <h3>UI/UX</h3>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Learn More</span>
                    </button>
                  </div>
                </div>
                <div class="card mx-1">
                  <img src="/Assets/uiux-carousal.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="service-icon">
                      <img src="/Assets/service-icon.svg" alt="service" className="img-fluid " decoding="async" />
                    </div>
                    <div className="service-title">
                      <h3>UI/UX</h3>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Learn More</span>
                    </button>
                  </div>
                </div>
                <div class="card mx-1" >
                  <img src="/Assets/uiux-carousal.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="service-icon">
                      <img src="/Assets/service-icon.svg" alt="service" className="img-fluid " decoding="async" />
                    </div>
                    <div className="service-title">
                      <h3>UI/UX</h3>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Learn More</span>
                    </button>
                  </div>
                </div>
                <div class="card mx-1" >
                  <img src="/Assets/uiux-carousal.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="service-icon">
                      <img src="/Assets/service-icon.svg" alt="service" className="img-fluid " decoding="async" />
                    </div>
                    <div className="service-title">
                      <h3>UI/UX</h3>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Learn More</span>
                    </button>
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
  );
}

export default What;
