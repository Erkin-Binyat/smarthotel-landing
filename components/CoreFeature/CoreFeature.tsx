import { CoreFeatureProps } from "@/public/types";

const CoreFeature = ({service, activeTab}: CoreFeatureProps) => {
  const { content: { title, heading, desc, img } } = service;

  return (
    <div className={activeTab ? "tab-pane fade show active" : "tab-pane fade show"} id="home" role="tabpanel" aria-labelledby="home-tab" key={title}>
    <div className="row align-items-center mt-55">
      <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-12">
        <div className="feature_wrapper_02 mb-30">
          <div className="section-title text-left mb-35">
            <h5>{title}</h5>
            <h2>{heading}</h2>
            <p className="mt-30">{desc}</p>
          </div>
        </div>
      </div>
      <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-12">
        <div className="feature_img_02 f-padding text-end mb-30">
          <img className="img-fluid" style={{borderRadius: "12px"}} src={img} alt=""/>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CoreFeature;