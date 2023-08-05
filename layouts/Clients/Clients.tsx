import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import yelken from "@/public/assets/img/brand/yelken.svg";
import divan from "@/public/assets/img/brand/Divan.svg";
import archabil from "@/public/assets/img/brand/archabil.png";
import garagum from "@/public/assets/img/brand/garagum.png";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 1,
  },
  768: {
    items: 2,
  },
  1024: {
    items: 4,
    margin: 10,
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
            <div className="col-xl-2" style={{width: "100%"}}>
              <div className="slide_img">
                <a href="#"><Image src={divan} width={250} priority alt="yelken"/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "100%"}}>
              <div className="slide_img">
                <a href="#"><Image src={yelken} width={250} priority alt="yelken"/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "100%"}}>
              <div className="slide_img">
                <a href="#"><Image src={archabil} width={250} priority alt="archabil"/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "100%"}}>
              <div className="slide_img">
                <a href="#"><Image src={garagum} width={250} priority alt="garagum"/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "100%"}}>
              <div className="slide_img">
                <a href="#"><Image src={divan} width={250} priority alt="yelken"/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "100%"}}>
              <div className="slide_img">
                <a href="#"><Image src={yelken} width={250} priority alt="yelken"/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "100%"}}>
              <div className="slide_img">
                <a href="#"><Image src={archabil} width={250} height={50} priority alt="archabil"/></a>
              </div>
            </div>
            <div className="col-xl-2" style={{width: "100%"}}>
              <div className="slide_img">
                <a href="#"><Image src={garagum} width={250} height={50} priority alt="garagum"/></a>
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