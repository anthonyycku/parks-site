import React from 'react';
import { Link } from "react-router-dom";
import navMenu from "../constants/nav-menu";
import MenuButton from "../../button/menu-button";

const MenuLarge = () => {
  return (
    <div className="flex items-center justify-between text-3xl w-1/2">
      {navMenu.map(({ path, text }) => (
        <Link to={path} key={text}>
          <MenuButton text={text}/>
        </Link>
      ))}
    </div>
  )
};

export default MenuLarge;