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

	return (
		<>
			<section className="what-do-area-02 what-do-area-06 pt-140 pb-100 mb-100" id="features">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xxl-6 col-xl-6 aos-init aos-animate" data-aos="fade-up">
							<div className="section-title blue-title text-center pr-50 pl-50 mb-40">
								<h2>{t("features.title")}</h2>
							</div>
						</div>
					</div>
					<div className="row">{renderFeatures}</div>
				</div>
			</section>
		</>
	)
};

export default Features;