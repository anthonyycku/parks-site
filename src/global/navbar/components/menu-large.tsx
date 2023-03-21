import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import navMenu from "../constants/nav-menu";
import MenuButton from "../../button/menu-button";
import logo from '../../../assets/logo.png';
import AboutSubMenu from "./about-sub-menu";

const MenuLarge = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const closeMenuTimerRef = useRef<number | null>(null);

  const handleMouseEnter = (text: string) => {
    if (text !== 'ABOUT') return;
    setOpenSubMenu(true);
    if (closeMenuTimerRef.current) {
      clearTimeout(closeMenuTimerRef.current);
      closeMenuTimerRef.current = null;
    }
  }

  const handleMouseLeave = (text: string) => {
    if (text !== 'ABOUT') return;
    closeMenuTimerRef.current = setTimeout(() => {
      setOpenSubMenu(false);
    }, 200);
  };

  const handleMouseClick = (text: string) => {
    if (text !== 'ABOUT') return;
    setOpenSubMenu(true);
  }

  useEffect(() => {
    return () => {
      if (closeMenuTimerRef.current) clearTimeout(closeMenuTimerRef.current);
    }
  })

  return (
    <div className="flex items-center justify-center w-full">

      <div className="relative flex items-center justify-between text-2xl w-1/2">
        {navMenu.map(({ path, text }) => (
          <Link
            to={path}
            key={text}
            onMouseEnter={() => handleMouseEnter(text)}
            onMouseLeave={() => handleMouseLeave(text)}
            onClick={() => handleMouseClick(text)}
            className="w-full"
          >
            <div className="flex items-center justify-center px-4 h-20 hover:bg-gray-500 hover:bg-opacity-20">
              <MenuButton text={text}/>
            </div>
          </Link>
        ))}
        {openSubMenu && (
          <AboutSubMenu
            handleMouseEnter={() => handleMouseEnter('ABOUT')}
            handleMouseLeave={() => handleMouseLeave('ABOUT')}
          />
        )}
      </div>
    </div>
  )
};

export default MenuLarge;