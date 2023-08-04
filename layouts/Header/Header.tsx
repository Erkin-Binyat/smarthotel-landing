import Image from "next/image";
import logo from "@/public/assets/img/logo/logo_tk.svg";
import logo_en from "@/public/assets/img/logo/logo_en.svg";
import logo_ru from "@/public/assets/img/logo/logo_ru.svg";
import { useTranslation } from "next-i18next";
import { LanguageSwitcher } from "@/components";
import useToggle from "@/hooks/useToggle";
import { Sidebar } from "..";
import bars from "@/public/assets/img/bars.svg";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Header = () => {
  const { t, i18n: { language } } = useTranslation("common");
  const { open, toggle } = useToggle();
  const [ scrollY, setScrollY ] = useState(0);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrollY(offset);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll)
  })
  
  useEffect(() => {
    const header = document.querySelector(".main-header-area");

    if(scrollY < 200) {
      header?.classList.remove("sticky");
    } else {
      header?.classList.add("sticky");
    };
  }, [scrollY]);

  return (
    <>
      <header>
        <div className="main-header-area main-header-02 main-header-06 header-06-bg pt-20 pb-10">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                <div className="logo">
                  <a className="logo-img" href="/"><Image width={150} src={language === "en" ? logo_en : language === "ru" ? logo_ru : logo} priority
                    alt="logo" /></a>
                  <a className="logo-img sticky-logo d-none" href="/"><Image width={150} priority
                    src={language === "en" ? logo_en : language === "ru" ? logo_ru : logo} alt="logo" /></a>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="main-menu main-menu-02 main-menu-06 d-none d-lg-block text-lg-end ml-45">
                  <nav>
                    <ul>
                      <li><a style={{ cursor: "pointer" }} href="#aboutUs" id="about">{t("navigation.about")}</a></li>
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
                      <button onClick={() => toggle()} className="btn">
                        <Image src={bars} width={25} height={25} alt={"bars"} />
                      </button>
                    </div>
                  </li>
                  <li className="d-none d-lg-inline-block">
                    <a id="contactLink" href="#contactUs" className="theme_btn theme_btn_bg white_btn d-flex align-items-center"> {t("navigation.contact")}
                    <FaChevronRight size={13}/>
                    </a>
                  </li>
                  <li className="d-none d-lg-inline-block" style={{ paddingTop: "5px", height: "fit-content" }}>
                    <LanguageSwitcher />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar open={open} toggle={toggle} />
    </>)
};

export default Header;