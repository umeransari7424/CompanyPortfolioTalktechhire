import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
                responsive={responsive}
                autoPlay="true"
                interval={2000}
                infinite="true"
                arrows={true}
              >
                <div className="client-img ">
                  <div>
                    <img src="/Assets/avatar-01.jpg" class="center-block img-circle" alt="Customer Feedback" />
                  </div> <br />
                  <div>
                    <h3 class="customer-name">Skye Finney</h3>
                  </div>
                  <br />
                  <div className=" d-flex justify-content-center align-items-center">
                    <h4 className="w-50 client-feedback">Man, this thing is getting better and better as I learn more about it. We were treated like royalty. IT solution should be nominated for service of the year. I made back the purchase price in just 48 hours!</h4>
                  </div>
                </div>
                <div className="client-img ">
                  <div>
                    <img src="//c2.staticflickr.com/8/7310/buddyicons/24846422@N06_r.jpg" class="center-block img-circle" alt="Customer Feedback" />
                  </div> <br />
                  <div>
                    <h3 class="customer-name">Lisa Redfern</h3>
                  </div>
                  <br />
                  <div className=" d-flex justify-content-center align-items-center">
                    <h4 className="w-50 client-feedback">It's the perfect solution for our business. Just what I was looking for. We were treated like royalty. Absolutely wonderful! It really saves me time and effort. business is exactly what our business has been lacking.</h4>
                  </div>
                </div>
                <div className="client-img ">
                  <div>
                    <img src="/Assets/avatar-03.jpg" class="center-block img-circle" alt="Customer Feedback" />
                  </div> <br />
                  <div>
                    <h3 class="customer-name">Tyson Perivolaris</h3>
                  </div>
                  <br />
                  <div className=" d-flex justify-content-center align-items-center">
                    <h4 className="w-50 client-feedback">IT solution is the most valuable business resource we have EVER purchased. I am completely blown away. I love your system. It's exactly what I've been looking for. I love business. It really saves me time and effort.</h4>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedbacks