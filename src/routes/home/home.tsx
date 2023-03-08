import React from 'react';
import ParallaxHome from "./components/parallax/parallax-home";
import Intro from "./components/sections/intro/intro";
import ParallaxEvents from "./components/parallax/parallax-events";

const Home = () => {

  return (
    <>
      <ParallaxHome/>

      <div className="flex flex-col p-2">
        <Intro/>
      </div>

      <ParallaxEvents/>

      <div className="flex flex-col p-2">
        <Intro/>
      </div>
    </>
  )
};

export default Home;