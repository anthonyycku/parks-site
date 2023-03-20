import React, { FC, ReactNode } from 'react';
import './text-block-background.scss';

interface TextBlockBackground {
  children: ReactNode;
  className: string;
  bgColor?: 'bg-white' | 'bg-primary' | 'bg-secondary';
}

const TextBlockBackground: FC<TextBlockBackground> = ({ children, className = "", bgColor = 'bg-white' }) => {
  return (
    <div className={`${className} text-background p-2`}>
      {children}
    </div>
  )
};

export default TextBlockBackground;