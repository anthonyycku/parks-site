import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from "react-icons/all";
import navMenu from "../constants/nav-menu";
import MenuButton from "../../button/menu-button";
import { Link } from "react-router-dom";
import '../nav-bar.css';
import logo from "../../../assets/logo.png";

const MenuSmall = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    setIsOpen(prev => !prev);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [])

  return (
    <>
      <div className={`relative`} ref={menuRef}>

        <div
          className={`absolute left-[1rem] top-0 transform -translate-x-1/2 -translate-y-1/2 ${isOpen ? 'bg-opacity-50 bg-gray-300 rounded-full p-2' : ''}`}>
          <AiOutlineMenu
            size="2rem"
            onClick={handleMenuClick}
            className={`cursor-pointer`}
          />
        </div>

        <div
          className={`menu ${isOpen ? 'menu-open' : ''} absolute -left-2 w-36 bg-black rounded p-2 bg-opacity-90 flex flex-col space-y-4`}>
          {navMenu.map(({ path, text, icon }) => (
            <Link to={path} key={text} onClick={handleMenuClick}>
              <MenuButton text={text} icon={icon}/>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
};

export default MenuSmall;