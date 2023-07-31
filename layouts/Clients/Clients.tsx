import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 1,
    margin: 2
  },
  768: {
    items: 2,
    margin: 2
  },
  1024: {
    items: 4,
    margin: 10
  }
}

const Clients = () => {
  return (
    <>
      <div id="partners" className="pt-150"></div>
      <section className="brand-area pt-130 pb-120">
        <div className="container">
          <div className="row brand-active">
            <OwlCarousel dots={false} loop responsive={Responsive} autoplay autoplayTimeout={3000}>
            <div className="col-xl-2" style={{width: "250px"}}>
              <div className="slide_img">
                <a href="#"><img src="./assets/img/brand/divan.svg" alt=""/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "250px"}}>
              <div className="slide_img">
                <a href="#"><img src="./assets/img/brand/yelken.svg" alt=""/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "250px"}}>
              <div className="slide_img">
                <a href="#"><img src="./assets/img/brand/03.png" alt=""/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "250px"}}>
              <div className="slide_img">
                <a href="#"><img src="./assets/img/brand/04.png" alt=""/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "250px"}}>
              <div className="slide_img">
                <a href="#"><img src="./assets/img/brand/05.png" alt=""/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "250px"}}>
              <div className="slide_img">
                <a href="#"><img src="./assets/img/brand/divan.svg" alt=""/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "250px"}}>
              <div className="slide_img">
                <a href="#"><img src="./assets/img/brand/yelken.svg" alt=""/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "250px"}}>
              <div className="slide_img">
                <a href="#"><img src="./assets/img/brand/03.png" alt=""/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "250px"}}>
              <div className="slide_img">
                <a href="#"><img src="./assets/img/brand/04.png" alt=""/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "250px"}}>
              <div className="slide_img">
                <a href="#"><img src="./assets/img/brand/05.png" alt=""/></a>
              </div>
            </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  )
};

export default Clients;