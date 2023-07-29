import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="hero-area hero-area-02 hero-area-06 pos-rel">
        <div className="hero_right_img wow zoomIn animated d-none d-lg-block" data-wow-delay="0.9s">
          <img className="img-fluid" src="./assets/img/slider/slider6.png" alt="" />
        </div>
        <img className="shape-one" src="./assets/img/shape/16.png" alt="" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-5 col-lg-10">
              <div className="hero__content hero__content__02 hero__content__06 text-left">
                <h2 id="header-intro" className="main-title mb-20 wow fadeInUp2 animated" data-wow-delay=".2s">{t("hero.title")}
                </h2>
                <p id="headerAbout" className="wow fadeInUp2 animated" data-wow-delay=".4s">{t("hero.description")}</p>
                <ul className="btn-list mt-35 wow fadeInUp2 animated" data-wow-delay=".6s">
                  <li><a className="theme_btn theme_btn_bg" href="javascript: scrollToWhatWeDo();">discover more
                    <i className="fas fa-chevron-right"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="what"></div>
      <div style={{ marginBottom: "131px" }} id="features"></div> </>
  )
}

export default Hero