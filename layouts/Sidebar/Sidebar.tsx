import { useTranslation } from "next-i18next"
import Image from "next/image";
import times from "@/public/assets/img/times.svg";
import { LanguageSwitcher } from "@/components";

type BarProps = {
  open: boolean;
  toggle: () => void;
};


const Sidebar = ({open, toggle}: BarProps) => {
  const { t } = useTranslation("common");
  return (
    <>
      <aside className={open ? "slide-bar show" : "slide-bar"}>
        <div className="close-mobile-menu">
          <button onClick={() => toggle()} className="btn-close btn-close-white"></button>
        </div>
        <nav className="side-mobile-menu">
          <ul id="mobile-menu-active">
            <li><a style={{cursor: "pointer"}} href="#aboutUs" id="about-2">{t("navigation.about")}</a></li>
            <li><a style={{cursor: "pointer"}} href="#features" id="featuresLink-2">{t("navigation.features")}</a></li>
            <li><a id="pricingLink-2" href="#pricing" style={{cursor: "pointer"}}>{t("navigation.pricing")}</a></li>
            <li><a id="contactLink-2" href="#contactUs" style={{cursor: "pointer"}}>{t("navigation.contact")}</a></li>
          </ul>
        </nav>
        <LanguageSwitcher />
      </aside>
      <div className="body-overlay"></div>
    </>
  )
}

export default Sidebar