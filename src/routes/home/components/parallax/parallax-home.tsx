import React from 'react';
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import bannerBackground from "../../../../assets/background.png";
import bannerForeground from "../../../../assets/buddha.png";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxHome = () => {
  const background: BannerLayer = {
    image: bannerBackground,
    translateY: [0, 60],
    opacity: [1, 0.7],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  }

  const foreground: BannerLayer = {
    translateX: [40, 40],
    image: bannerForeground,
    translateY: [22, 35],
    opacity: [1, 0.7],
    scale: [0.3, 0.2, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  }

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="px-4 md:px-0 text-6xl md:text-8xl text-white font-thin">
          Pawit Chantaworakit
        </h1>
        <h1 className="px-4 md:px-0 text-4xl md:text-6xl text-white font-thin">
          Loneliest man in the world
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
      layers={[background, headline, foreground, gradientOverlay]}
      className="h-[100vh]"
    />
  )
};

export default ParallaxHome;