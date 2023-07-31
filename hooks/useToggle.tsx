import { useState } from "react";

const useToggle = () => {
  const [ open, setOpen ] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return { open, toggle };
};

export default useToggle;