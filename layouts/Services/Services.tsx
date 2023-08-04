"use client"
import { useEffect, useMemo, useState } from "react";
import { coreFeatures } from "@/public/static";
import { CoreFeature, Accordion } from "@/components";

const Services = () => {
	const [services, setServices] = useState(coreFeatures);
	const [index, setIndex] = useState(1);
	const [isMobile, setIsMobile] = useState(false);
	const width = window.innerWidth;

	useEffect(() => {
		if (width < 560) {
			setIsMobile(true)
		} else {
			setIsMobile(false);
		};
	}, [width]);

	// Rendering service header
	const serviceHeading = useMemo(() => {
		return services ? services.map((service, i) => {
			const { title } = service;
			const active = i + 1;
			const activeTab = active === index;

			return (
				<li className="nav-item" role="presentation" key={i}>
					<a className={activeTab ? "nav-link active" : "nav-link"} style={{ cursor: "pointer" }} id="home-tab" onClick={() => setIndex(active)} role="tab" aria-controls="home" aria-selected="true">
						<i className="flaticon-product"></i> {title}
					</a>
				</li>
			)
		}) : null;
	}, [services, index]);

	// Rendering service content | Desktop
	const serviceContent = useMemo(() => {
		return services ? services.map((service, i) => {
			const active = i + 1;
			const activeTab = active === index;

			return <CoreFeature service={service} key={i} activeTab={activeTab} />
		}) : null
	}, [services, index]);

	const serviceAccordion = useMemo(() => {
		return services ? services.map((service, index) => {
			return <Accordion service={service} index={index} key={index} />
		}) : null;
	}, [services]);

	return (
		<section className="services-area services-area-pb grey-bg pt-125 pb-100">
			<div className="container">
				<div className="row">
					<div className="col-xxl-6 offset-xxl-3 col-xl-8 offset-xl-2">
						<div className="section-title blue-title text-center mb-30">
							<h5>Core Features</h5>
							<h2>We create software for your
								business solutions</h2>
						</div>
					</div>
				</div>
				{isMobile ? <div className="accordion">{serviceAccordion}</div>
					:
					<>
						<ul className="nav nav-tabs" id="myTab" role="tablist">
							{serviceHeading}
						</ul>
						<div className="tab-content" id="myTabContent">
							{serviceContent}
						</div>
					</>
				}
			</div>
		</section>
	)
};

export default Services;