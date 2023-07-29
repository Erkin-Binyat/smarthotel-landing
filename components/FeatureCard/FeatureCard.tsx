type FeatureProps = {
  title: string,
  img: string,
  content: any[],
  index: number
}

const FeatureCard = ({title, img, content, index}: FeatureProps) => {
  return (
    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
    <div className="do_box do_box_02 grey-bg text-center mb-30">
      <div className={index < 1 ? "do_box__icon mb-40" : `do_box__icon icon_0${index + 1} mb-40`}>
        <img alt={title} src={img}
          style={{height: "40px", marginBottom: "20px"}} />
      </div>
      <h4>{title}</h4>
      <ul className="pr_list text-xxl-start">
        {content.map((data: any, index) => {
          const { name } = data;
          return <li key={index}><i className="far fa-check"></i> {name}</li>
        })}
      </ul>
    </div>
  </div>
  )
};

export default FeatureCard;