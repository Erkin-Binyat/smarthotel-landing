import { useTranslation } from "next-i18next";

const Download = () => {
	const { t } = useTranslation();

  return (
    <section className="download-area pos-rel pt-125 pb-130">
		<div className="download-shape d-none d-sm-inline-block"></div>
		<img className="shape-two d-none d-sm-inline-block" src="./assets/img/shape/10.png" alt=""/>
		<img className="shape-three d-none d-sm-inline-block" src="./assets/img/shape/06.png" alt=""/>
		<div className="container">
			<div className="row">
				<div className="col-xxl-8 col-xl-8 offset-xxl-2 offset-xl-2" data-wow-delay="0.1s">
					<div className="download_wrapper">
						<div className="section-title white-title text-center mb-50">
							<h5 className="animation" data-aos="fade">{t("download.platform")}</h5>
							<h2 className="animation" data-aos="fade-up">{t("download.heading")}</h2>
						</div>
					</div>
				</div>
				<div className="col-xl-12">
					<div className="dashbord_img-02 pos-rel pt-120 text-center animation" data-aos="fade-up">
						<img src="./assets/img/bg/04.png" alt=""/>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
};

export default Download;