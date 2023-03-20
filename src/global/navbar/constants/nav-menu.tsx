import React, { ReactNode } from "react";
import {
  AiOutlineBulb,
  AiOutlineShopping,
  BsCalendarEvent, BsPeople
} from "react-icons/all";

interface NavMenu {
  text: string;
  path: string;
  icon?: ReactNode
}

const navMenu: NavMenu[] = [
  {
    text: 'ABOUT',
    path: '/',
    icon: <AiOutlineBulb/>
  },
  {
    text: 'STAFF',
    path: '/',
    icon: <BsPeople/>
  },
  {
    text: 'EVENTS',
    path: '/',
    icon: <BsCalendarEvent/>
  },
  {
    text: 'SHOP',
    path: '/',
    icon: <AiOutlineShopping/>
  },
];

export default navMenu;