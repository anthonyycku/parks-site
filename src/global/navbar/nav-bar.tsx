import React from 'react';
import WhiteButton from "../button/white-button";
import useScrollHook from "../../hooks/use-scroll.hook";
import useWindowSizeHook from "../../hooks/use-window-size.hook";
import MenuLarge from "./components/menu-large";
import MenuSmall from "./components/menu-small";

const NavBar = () => {
  const { isScrolled } = useScrollHook();
  const { isDesktop } = useWindowSizeHook();

  const bgColor = (): string => {
    return isScrolled ? 'bg-black opacity-[90%]' : ''
  }

  return (
    <div className={`${bgColor()} text-white text-xl fixed w-full h-20 z-50 flex items-center p-4 justify-between`}>
      <div className={`hidden md:block`}/>

      {isDesktop ? <MenuLarge/> : <MenuSmall/>}

      <div>
        <WhiteButton text="Contact"/>
      </div>
    </div>
  )
};

export default NavBar;