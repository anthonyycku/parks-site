import React, { useEffect, useState } from 'react';
import { MOBILE_WIDTH } from "../constants/constants";

const UseWindowSizeHook = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > MOBILE_WIDTH);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return { isDesktop }
};

export default UseWindowSizeHook;