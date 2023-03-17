import React from 'react';
import { Link } from "react-router-dom";
import navMenu from "../constants/nav-menu";
import MenuButton from "../../button/menu-button";
import logo from '../../../assets/logo.png';

const MenuLarge = () => {
  return (
    <>
      <Link to="/" className="absolute">
        <img src={logo} width={80}/>
      </Link>

      <div className="flex items-center justify-between text-3xl w-1/2 ">
        {navMenu.map(({ path, text }) => (
          <Link to={path} key={text}>
            <MenuButton text={text}/>
          </Link>
        ))}
      </div>
    </>
  )
};

export default MenuLarge;