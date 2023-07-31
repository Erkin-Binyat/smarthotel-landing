import { useTranslation } from "next-i18next"

const Sidebar = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <aside className="slide-bar">
        <div className="close-mobile-menu">
          <a href=""><i className="fas fa-times"></i></a>
        </div>
        <nav className="side-mobile-menu">
          <ul id="mobile-menu-active">
            <li><a style={{cursor: "pointer"}} id="about-2">{t("navigation.about")}</a></li>
            <li><a style={{cursor: "pointer"}} id="featuresLink-2">{t("navigation.features")}</a></li>
            <li><a id="pricingLink-2" style={{cursor: "pointer"}}>{t("navigation.pricing")}</a></li>
            <li><a id="contactLink-2" style={{cursor: "pointer"}}>{t("navigation.contact")}</a></li>
          </ul>
        </nav>
      </aside>
      <div className="body-overlay"></div>
    </>
  )
}

export default Sidebar