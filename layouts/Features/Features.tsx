"use client"
import { FeatureCard } from "@/components";
import { features } from "@/static";
import { useMemo } from "react";

const Features = () => {
  const renderFeatures = useMemo(() => {
    return features ? features.map((feature, index) => {
      return <FeatureCard key={index} index={index} {...feature} /> }) : null
  }, [features]);
  
  return (
    <section className="what-do-area-02 what-do-area-06 pt-45 pb-100">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xxl-6 col-xl-6 wow fadeInUp2 animated" data-wow-delay="0.1s">
					<div className="section-title blue-title text-center pr-50 pl-50 mb-80">
						<h2>Complete solution for
							hotel management</h2>
					</div>
				</div>
			</div>
			<div className="row">{renderFeatures}</div>
			<div style={{paddingBottom: "20px"}} id="management"></div>
		</div>
	</section>
  )
};

export default Features;