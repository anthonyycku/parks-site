import React, { FC, ReactNode } from 'react';
import NavBar from "../navbar/nav-bar";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar/>
      {children}
    </div>
  )
};

export default Container;