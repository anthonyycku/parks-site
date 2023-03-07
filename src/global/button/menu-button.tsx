import React, { ReactNode } from 'react';

const MenuButton = ({ text }: { text: string }) => {
  return (
    <p className={`text-white hover:text-hoverColor`}>
      {text}
    </p>
  )
};

export default MenuButton;