import React, { ReactNode } from 'react';
import './corner-border.css';

const CornerBorder = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <div className={`corner-border ${className}`}>
      {children}
    </div>
  )
};

export default CornerBorder;