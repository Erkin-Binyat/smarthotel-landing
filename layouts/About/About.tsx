import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="what-do-area-02 what-do-area-06 pt-200 pb-50 mb-40" id="aboutUs">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-6 aos-init aos-animate" data-aos="fade-up">
            <div className="section-title blue-title text-center pr-50 pl-50 mb-40">
              <h2>{t("about.title")}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-8 col-xl-8" style={{ maxWidth: "1200px", margin: "auto" }}>
            <div className="row justify-content-start mb-20">
              <div className="col-xxl-12 col-xl-8 aos-init aos-animate"  data-aos="fade-up">
                <p className="text-justify" style={{ fontSize: "18px", color: "rgba(0, 0, 0, 0.7", textAlign: "justify" }}>{t("about.desc1")}</p>
              </div>
            </div>
            <div className="row justify-content-end pt-10 animation" data-aos="fade-up">
              <div className="col-xxl-12 col-xl-8" style={{ maxWidth: "1200px", margin: "auto" }}>
                <p style={{ fontSize: "18px", color: "rgba(0, 0, 0, 0.7", textAlign: "justify" }}>{t("about.desc2")} <br /> <br /> {t("about.desc3")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 about-feature pt-40" style={{ maxWidth: "1200px", margin: "auto" }}>
            <div className="col-xxl-12 col-xl-12 col-lg-6 col-md-6">
              <div className="plan pos-rel text-center">
                <div className="pr_head">
                  <h3>{t("about.features.head")}</h3>
                </div>
                <div className="pr_body">
                  <ul className="pr_list">
                    <li style={{fontSize: "19px"}}>{t("about.features.item1")}</li>
                    <li style={{fontSize: "19px"}}>{t("about.features.item2")}</li>
                    <li style={{fontSize: "19px"}}><span>{t("about.features.item3")}</span></li>
                    <li style={{fontSize: "19px"}}>{t("about.features.item4")}</li>
                    <li style={{fontSize: "19px"}}>{t("about.features.item5")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;