"use client"
import { FeatureCard } from "@/components";
import { features } from "@/public/static";
import { useMemo } from "react";
import { useTranslation } from "next-i18next";

const Features = () => {
	const { t } = useTranslation();

	// Rendering Features
	const renderFeatures = useMemo(() => {
		return features ? features.map((feature, index) => {
			return <FeatureCard key={index} index={index} {...feature} />
		}) : null
	}, [features]);

	const renderAccordion = useMemo(() => {
		return features ? features.map((feature, index) => {
			
		}) : null
	}, []);

	return (
		<>
			<section className="what-do-area-02 what-do-area-06 pt-140 pb-100" id="aboutUs">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xxl-6 col-xl-6 aos-init aos-animate" data-aos="fade-up">
							<div className="section-title blue-title text-center pr-50 pl-50 mb-40">
								<h2>Complete solution for
									hotel management</h2>
							</div>
						</div>
					</div>
					<div className="row justify-content-start mb-20">
						<div className="col-xxl-12 col-xl-8 aos-init aos-animate" data-aos="fade-up">
							<p className="text-left" style={{ fontSize: "18px", color: "rgba(0, 0, 0, 0.7", textAlign: "center"}}>{t("about.desc1")}</p>
						</div>
					</div>
					<div className="row justify-content-end mb-20 pt-10 animation" data-aos="fade-up">
						<div className="col-xxl-12 col-xl-8 ">
							<p style={{ fontSize: "18px", color: "rgba(0, 0, 0, 0.7", textAlign: "center" }} id={"features"}>{t("about.desc2")} <br/> <br/> {t("about.desc3")}</p>
						</div>
					</div>
					<div className="row pt-20">{renderFeatures}</div>
					<div style={{ paddingBottom: "20px" }} id="management"></div>
				</div>
			</section>
		</>
	)
};

export default Features;