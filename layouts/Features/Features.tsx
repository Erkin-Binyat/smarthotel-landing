"use client"
import { FeatureCard } from "@/components";
import { features } from "@/public/static";
import { useMemo } from "react";

const Features = () => {
  const renderFeatures = useMemo(() => {
    return features ? features.map((feature, index) => {
      return <FeatureCard key={index} index={index} {...feature} /> }) : null
  }, [features]);
  
  return (
    <section className="what-do-area-02 what-do-area-06 pt-140 pb-100" id="features">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xxl-6 col-xl-6 wow fadeInUp2 animated" data-wow-delay="0.1s">
					<div className="section-title blue-title text-center pr-50 pl-50 mb-40">
						<h2>Complete solution for
							hotel management</h2>
					</div>
				</div>
			</div>
			<div className="row justify-content-start mb-20">
				<div className="col-xxl-6 col-xl-6 ">
					<p className="text-left">SmartHotel is a hotel management system developed by local software specialists. Managing hotel operations is simplified with SmartHotel management technology, which controls processes for improved efficiency. SmartHotel offers an intuitive user interface, comprehensive functionality for all areas of hotel management, secure data storage and meets the needs of all types of hotels. </p>
				</div>
			</div>
			<div className="row justify-content-end mb-40">
				<div className="col-xxl-6 col-xl-6 ">
					<p className="text-center">The software provides key features as; front desk & back office operations (with integrated accounting), reservation management, housekeeping, assigning rooms, managing room inventory, and performing accounting and billing functions. </p>
				</div>
			</div>
			<div className="row">{renderFeatures}</div>
			<div style={{paddingBottom: "20px"}} id="management"></div>
		</div>
	</section>
  )
};

export default Features;