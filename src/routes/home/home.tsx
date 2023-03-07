import React from 'react';
import ParallaxHome from "./components/parallax-home";
import Intro from "./components/sections/intro/intro";

const Home = () => {

  return (
    <>
      <ParallaxHome/>

      <div className="flex flex-col p-2">
        <Intro/>
      </div>
    </>
  )
};

export default Home;