import React, { ReactNode } from "react";
import {
  AiOutlineBulb,
  AiOutlineShopping,
  BsCalendarEvent, BsPeople
} from "react-icons/all";

interface NavMenu {
  text: string;
  path: string;
  icon?: ReactNode;
}

export const aboutMenu: NavMenu[] = [
  {
    text: 'PHILOSOPHY',
    path: '/'
  },
  {
    text: 'PRACTITIONERS',
    path: '/'
  },
  {
    text: 'TESTIMONIALS',
    path: '/'
  }
]

const navMenu: NavMenu[] = [
  {
    text: 'ABOUT',
    path: '/',
    icon: <AiOutlineBulb/>,
  },
  {
    text: 'GALLERY',
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
  {
    text: 'CONTACT',
    path: '/'
  }
];

export default navMenu;