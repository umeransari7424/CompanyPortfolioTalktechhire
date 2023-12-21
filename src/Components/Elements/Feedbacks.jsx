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
    items: 1
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
function Feedbacks() {
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
    <div className="feedback">
      <div className="feedback1">
     <div className="container-fluid py-5">
     <div className="row text-center pb-5">
            <div>
              <h6 className="whatwedo">Feedbacks</h6>
            </div>
            <div>
              <h1>What our Clients Say</h1>
            </div>
            
          </div>
     <div className="row d-flex justify-content-center text-center carousal-row pb-5">
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
                arrows={true}
              // showStatus={false}
              // showIndicators={false}
              // showThumbs={false} 

              >
                <div className="client-img ">
                  <div>
                <img src="//c2.staticflickr.com/8/7310/buddyicons/24846422@N06_r.jpg" class="center-block img-circle" alt="Customer Feedback" />
                  </div> <br />
                  <div>
                <h3 class="customer-name">Lisa Redfern</h3>
                  </div>
                  <br />
                  <div className=" d-flex justify-content-center align-items-center">
                <h4 className="w-50 client-feedback">Lorem Ipsum is simply dummy text  of the printing and typesetting industry. 
                   It is a long established fact that  a reader will be distracted by
                    the readable its layout.</h4>
                </div>
                  </div>

               
              </Carousel>
            </div>
            {/* <div className="arrow-navigation gap-2">
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
            </div> */}

          </div>
     </div>
      </div>
    </div>
  )
}

export default Feedbacks