import React, { ReactNode } from 'react';

const MenuButton = ({ text, icon }: { text: string, icon?: ReactNode }) => {
  return (
    <div className={`text-white hover:text-hoverColor flex items-center space-x-2`}>
      {icon}
      <p>{text}</p>
    </div>
  )
};

export default MenuButton;