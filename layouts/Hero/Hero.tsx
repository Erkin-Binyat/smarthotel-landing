import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("common");
  
  return (
    <>
      <div className="hero-area hero-area-02 hero-area-06 pos-rel">
        <div className="hero_right_img d-none d-lg-block">
          <img className="img-fluid animation" src="./assets/img/slider/slider6.png" alt="" data-aos={"zoom-in"} />
        </div>
        <img className="shape-one" src="./assets/img/shape/16.png" alt="" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-5 col-lg-6">
              <div className="hero__content hero__content__02 hero__content__06 text-left">
                <h2 id="header-intro" className="main-title mb-20 animation" data-aos={"fade-up"}>{t("hero.title")}
                </h2>
                <p id="headerAbout" className="animation" data-aos={"fade-up"}>{t("hero.description")}</p>
                <ul className="btn-list mt-35 animation" data-aos={"fade-up"}>
                  <li>
                    <a className="theme_btn theme_btn_bg d-flex align-items-center" style={{textTransform: "lowercase"}} href="#aboutUs">{t("hero.discover")}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero