const Download = () => {
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
							<h5 className="aos-init aos-animate" data-aos="fade">One platform, endless opportunities
							</h5>
							<h2 className="aos-init aos-animate" data-aos="fade-up">Built for hotels of all sizes
							</h2>
						</div>
					</div>
				</div>
				<div className="col-xl-12">
					<div className="dashbord_img-02 pos-rel pt-120 text-center aos-init aos-animate" data-aos="fade-up">
						<img src="./assets/img/bg/04.png" alt=""/>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
};

export default Download;