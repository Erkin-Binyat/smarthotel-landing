import useToggle from "@/hooks/useToggle";
import { CoreFeatureProps } from "@/public/types";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "next-i18next";

const Accordion = ({ service }: CoreFeatureProps) => {
  const { title, content: { desc, img } } = service;
  const { open, toggle } = useToggle();
  const { t } = useTranslation();

  // Button style
  const btnStyle = {
    width: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: 20,
    padding: 10,
    display: "flex",
    justifyContent: "space-between"
  }
  
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button onClick={() => toggle()} style={btnStyle} aria-expanded="true" aria-controls="collapse">
          {t(`coreFeatures.${title}`)} <span style={{transform: open ? "rotate(-180deg)" : "rotate(0)", transition: "all .3s ease"}}><FaChevronDown/></span>
        </button>
      </h2>
      <div className={open ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <div className="feature_wrapper_02 mb-30">
            <div className="section-title text-left mb-35">
              <p className="pt-30">{t(`coreFeatures.${desc}`)}</p>
            </div>
            <img className="img-fluid" style={{ borderRadius: "12px" }} src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Accordion;