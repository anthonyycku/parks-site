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
    text: 'Philosophy',
    path: '/',
    icon: <AiOutlineBulb/>
  },
  {
    text: 'Staff',
    path: '/',
    icon: <BsPeople/>
  },
  {
    text: 'Events',
    path: '/',
    icon: <BsCalendarEvent/>
  },
  {
    text: 'Shop',
    path: '/',
    icon: <AiOutlineShopping/>
  },
];

export default navMenu;