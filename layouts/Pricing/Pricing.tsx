import { useTranslation } from "next-i18next";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
    const { t } = useTranslation();

    return (
        <>
            <div id="pricing" style={{height: "50px"}}></div>
            <section className="plan-area pt-100">
                <div className="container">
                    <div className="plan-wrapper">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6">
                                <div className="section-title pt-80 mb-30">
                                    <h5>{t("pricing.title")}</h5>
                                    <h2>{t("pricing.heading")}</h2>
                                    <p className="pt-30">{t("pricing.description")}</p>
                                </div>
                            </div>
                            <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1">
                                <div className="dnxte-content-toggle">
                                    <div className="dnxte-content-toggle-body">
                                        <div className="dnxte-content-toggle-front">
                                            <div className="row pb-100">
                                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                                                    <div className="plan pos-rel active text-center mb-30">
                                                        <div className="pr_head"></div>
                                                        <div className="pr_body mb-20">
                                                            <ul className="pr_list">
                                                                <li><FaCheck size={12} />  {t("pricing.dashboard")}</li>
                                                                <li><FaCheck size={12} />  {t("pricing.reception")}</li>
                                                                <li><span><FaCheck size={12} />  {t("pricing.multipleUser")}</span></li>
                                                                <li><FaCheck size={12} />  {t("pricing.housekeeping")}</li>
                                                                <li><FaCheck size={12} />  {t("pricing.support")}</li>
                                                            </ul>
                                                        </div>
                                                        <div className="pr_footer">
                                                            <a href="#contactUs" className="theme_btn pr_btn">{t("pricing.request")} <i className="fas fa-chevron-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="has-plan-border">
                        <div className="border-bottom"></div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Pricing;