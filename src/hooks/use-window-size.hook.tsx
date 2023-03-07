import React, { useEffect, useState } from 'react';

const UseWindowSizeHook = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
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