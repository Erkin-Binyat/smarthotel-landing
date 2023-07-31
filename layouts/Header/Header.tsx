import Image from "next/image";
import logo from "@/public/assets/img/logo/logo.png";
import { useTranslation } from "next-i18next";
import { LanguageSwitcher } from "@/components";

const Header = () => {
  const { t } = useTranslation("common");

  return <header>
    <div className="main-header-area main-header-02 main-header-06 header-06-bg pt-20 pb-10">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
            <div className="logo">
              <a className="logo-img" href="/"><Image width={150} src={logo}
                alt="" /></a>
              <a className="logo-img sticky-logo d-none" href="/"><Image width={150}
                src={logo} alt="" /></a>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
            <div className="main-menu main-menu-02 main-menu-06 d-none d-lg-block text-lg-end ml-45">
              <nav>
                <ul>
                  <li><a style={{ cursor: "pointer" }} href="#features" id="about">{t("navigation.about")}</a></li>
                  <li><a style={{ cursor: "pointer" }} href="#features" id="featuresLink">{t("navigation.features")}</a></li>
                  <li><a id="pricingLink" href="#pricing" style={{ cursor: "pointer" }}>{t("navigation.pricing")}</a></li>
                  <li><a style={{ cursor: "pointer" }} href="#partners" id="partnerstLink">{t("navigation.partners")}</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-6 text-xxl-start text-end">
            <ul className="right-nav d-flex justify-content-end" style={{ gap: "10px" }}>
              <li>
                <div className="hamburger-menu d-md-block d-lg-none">
                  <a href="">
                    <i className="far fa-bars"></i>
                  </a>
                </div>
              </li>
              <li className="d-none d-lg-inline-block">
                <a id="contactLink" href="#contactUs" className="theme_btn theme_btn_bg white_btn"> {t("navigation.contact")}<i
                  className="fas fa-chevron-right"></i></a>
              </li>
              <li className="d-none d-lg-inline-block" style={{ paddingTop: "5px", height: "fit-content" }}>
                <LanguageSwitcher/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
};

export default Header;