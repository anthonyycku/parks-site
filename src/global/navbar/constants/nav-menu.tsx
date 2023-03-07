import React, { ReactNode } from "react";
import {
  AiOutlineBulb,
  AiOutlineHome,
  AiOutlineShopping,
  BsCalendarEvent
} from "react-icons/all";

interface NavMenu {
  text: string;
  path: string;
  icon?: ReactNode
}

const navMenu: NavMenu[] = [
  {
    text: 'Home',
    path: '/',
    icon: <AiOutlineHome/>
  },
  {
    text: 'Events',
    path: '/',
    icon: <BsCalendarEvent/>
  },
  {
    text: 'Learn',
    path: '/',
    icon: <AiOutlineBulb/>
  },
  {
    text: 'Shop',
    path: '/',
    icon: <AiOutlineShopping/>
  },
];

export default navMenu;