import React from 'react';
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import bannerBackground from "../../../../assets/background1.png";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxHome = () => {
  const background: BannerLayer = {
    image: bannerBackground,
    speed: -20,
    shouldAlwaysCompleteAnimation: true,
  }

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="animate-fadeIn px-4 md:px-0 text-4xl md:text-6xl text-white font-thin">
          A GLIMPSE
        </h1>
        <h1 className="animate-fadeIn-0.5s opacity-0 px-4 md:px-0 text-4xl md:text-6xl text-white font-thin">
          INTO THE HEART OF
        </h1>
        <h1 className="animate-fadeIn-1s opacity-0 px-4 md:px-0 text-6xl md:text-8xl text-white font-bold">
          THAILAND
        </h1>
      </div>
    ),
  }

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900"/>
    ),
  }

  return (
    <ParallaxBanner
      layers={[background, headline, gradientOverlay]}
      className="h-[100vh]"
    />
  )
};

export default ParallaxHome;