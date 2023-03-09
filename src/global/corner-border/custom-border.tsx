import React, { ReactNode } from 'react';

const CustomBorder = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <div className={`custom-border ${className}`}>
      {children}
    </div>
  )
};

export default CustomBorder;