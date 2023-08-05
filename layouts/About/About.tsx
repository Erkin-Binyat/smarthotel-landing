import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="what-do-area-02 what-do-area-06 pt-140 pb-50" id="aboutUs">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-6 col-xl-6 aos-init aos-animate" data-aos="fade-up">
          <div className="section-title blue-title text-center pr-50 pl-50 mb-40">
            <h2>About SmartHotel</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-start mb-20">
        <div className="col-xxl-12 col-xl-8 aos-init aos-animate" style={{paddingInline: "10rem"}} data-aos="fade-up">
          <p className="text-justify" style={{ fontSize: "18px", color: "rgba(0, 0, 0, 0.7", textAlign: "justify"}}>{t("about.desc1")}</p>
        </div>
      </div>
      <div className="row justify-content-end pt-10 animation" data-aos="fade-up">
        <div className="col-xxl-12 col-xl-8 " style={{paddingInline: "10rem"}}>
          <p style={{ fontSize: "18px", color: "rgba(0, 0, 0, 0.7", textAlign: "justify" }}>{t("about.desc2")} <br/> <br/> {t("about.desc3")}</p>
        </div>
      </div>
    </div>
  </section>
  )
};

export default About;