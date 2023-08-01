import ContactForm from "@/components/ContactForm/ContactForm";
import { useTranslation } from "next-i18next";

const Contact = () => {
	const { t } = useTranslation();

	return (
		<section className="contact-area pt-125 " id="contactUs">
			<div className="container">
				<div className="row">
					<div className="col-xxl-4 col-xl-4 col-lg-6">
						<div className="feature_wrapper_02 mb-30">
							<div className="section-title text-left mb-40">
								<h5>{t("contact.heading")}</h5>
								<h2>{t("contact.subheading")}</h2>
							</div>
							<ul className="features_list contact-list mb-40">
								<li><i className="fal fa-map-marker-alt"></i>
									<span>{t("contact.location")}</span></li>
								<li><i className="fal fa-phone"></i>+993 12 48 06 13</li>
								<li><i className="fal fa-envelope-open"></i>contact@smarthotel.com.tm</li>
							</ul>
						</div>
					</div>
					<div className="col-xxl-6 offset-xxl-2 col-lg-6">
						<div className="contact-form"><ContactForm/></div>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Contact;