import React from 'react';
import useWindowSizeHook from "../../hooks/use-window-size.hook";
import MenuLarge from "./components/menu-large";
import MenuSmall from "./components/menu-small";
import './nav-bar.css';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const { isDesktop } = useWindowSizeHook();

  return (
    <div
      className={`navbar text-white text-xl fixed w-full h-20 z-50 flex items-center p-4`}>
      <Link to="/" className="absolute right-2 md:left-2">
        <img src={logo} width={80}/>
      </Link>
      {isDesktop ? <MenuLarge/> : <MenuSmall/>}
    </div>
  )
};

export default NavBar;