import useToggle from "@/hooks/useToggle";
import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollTop = () => {
  const { open, setOpen } = useToggle();
  const [ scrollY, setScrollY ] = useState(0);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrollY(offset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if(scrollY < 200){
      setOpen(false);
      document.getElementById("scrollUp")?.setAttribute("data-aos", "fade-up");
    } else {
      setOpen(true);
      document.getElementById("scrollUp")?.removeAttribute("data-aos");
    };
  }, [scrollY]);

  const show: any = {
    position: "fixed",
    zIndex: 2147483647,
    display: open ? "block" : "none",
    transition: "all .3s ease"
  }

  return (
    <a href={"#top"} id="scrollUp" style={show} data-aos={"fade-up"}>
      <FaAngleDoubleUp color={"white"} />
    </a>
  )
};

export default ScrollTop;