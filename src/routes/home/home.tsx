import React from 'react';
import ParallaxHome from "./components/parallax/parallax-home";
import Intro from "./components/sections/intro/intro";
import ParallaxEvents from "./components/parallax/parallax-events";

const Home = () => {

  return (
    <>
      <ParallaxHome/>

      <div className="flex justify-center">
        <Intro/>
      </div>

      <ParallaxEvents/>

      <div className="flex flex-col">
        <Intro/>
      </div>
    </>
  )
};

export default Home;