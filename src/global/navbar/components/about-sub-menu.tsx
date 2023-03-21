import React, { FC } from 'react';
import { aboutMenu } from "../constants/nav-menu";
import { Link } from "react-router-dom";

interface AboutSubMenuProps {
  handleMouseEnter: (text: string) => void;
  handleMouseLeave: (text: string) => void;
}

const AboutSubMenu: FC<AboutSubMenuProps> = ({ handleMouseLeave, handleMouseEnter }) => {
  return (
    <div
      className="absolute top-20 bg-gray-700 bg-opacity-50 flex flex-col space-y-2 text-lg"
      onMouseEnter={() => handleMouseEnter('ABOUT')}
      onMouseLeave={() => handleMouseLeave('ABOUT')}
    >
      {aboutMenu.map(({ text, path }) => (
        <Link to={path} className="p-2 hover:bg-gray-600 hover:bg-opacity-50">
          <p>{text}</p>
        </Link>
      ))}
    </div>
  )
};

export default AboutSubMenu;