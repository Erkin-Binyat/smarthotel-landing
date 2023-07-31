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
						<div className="contact-form">
							<form className="form" id="contact-form" method="POST" action="send"
								encType="application/x-www-form-urlencoded">
								<div className="row">
									<div className="col-xl-6">
										<input className="contact__input" type="text" id="name" name="name" placeholder={t("contact.name")} required />
									</div>
									<div className="col-xl-6">
										<input className="contact__input" type="email" id="email" name="email" placeholder={t("contact.mail")}
											required />
									</div>
								</div>
								<div className="row">
									<div className="col-xl-6">
										<input className="contact__input" type="text" id="phone" name="phone" placeholder={t("contact.phone")} />
									</div>
									<div className="col-xl-6">
										<input className="contact__input" type="text" id="subject" name="subject" placeholder={t("contact.subject")} />
									</div>
								</div>
								<div className="row">
									<div className="col-12">
										<textarea className="contact__input contact__input-messege" id="message" name="message"
											placeholder={t("contact.message")} required minLength={10}></textarea>
									</div>
								</div>
								<div className="row">
									<div className="col-12">
										<div className="subs-btn">
											<button className="theme_btn theme_btn_bg btn" type="submit">{t("contact.submit")} <i
												className="fas fa-chevron-right"></i></button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Contact;