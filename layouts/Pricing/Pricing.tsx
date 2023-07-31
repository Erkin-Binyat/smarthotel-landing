import { useTranslation } from "next-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="pricing" className="pt-150"></div>
      <section className="container-fluid plan-area pt-10" style={{ backgroundColor: "#266de8" }}>
        <div className="container">
          <div className="row">
            <div className="plan pos-rel active text-start mb-20 m-60">
              <div className="pr_head">
                <span>{t("pricing.title")}</span>
                <h3 className="pt-20">{t("pricing.heading")}</h3>
              </div>
              <div className="pr_body mb-30">
                <ul className="pr_list">
                  <li><i className="far fa-check"></i> {t("pricing.description")}</li>
                </ul>
              </div>
              <div className="pr_footer">
                <a href="#contactUs" className="theme_btn pr_btn">{t("pricing.request")} <i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Pricing;