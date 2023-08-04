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
    } else {
      setOpen(true);
    };
  }, [scrollY]);

  const show: any = {
    position: "fixed",
    zIndex: 2147483647,
    visibility: open ? "visible" : "hidden",
    opacity: open ? 1 : 0,
    transition: "all .3s ease"
  }

  return (
    <a href={"#top"} id="scrollUp" style={show} data-aos={"fade-up"}>
      <FaAngleDoubleUp color={"white"} />
    </a>
  )
};

export default ScrollTop;