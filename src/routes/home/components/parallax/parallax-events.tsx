import React from 'react';
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { BsCalendarEvent } from "react-icons/all";

const ParallaxEvents = () => {
  const eventButton: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <button
          className="p-2 rounded-xl text-4xl flex space-x-2 border border-1 border-white hover:text-white hover:bg-yellow-500 hover:bg-opacity-50 transition duration-500 ease-in-out"
        >
          <BsCalendarEvent/>
          <p>EVENTS</p>
        </button>
      </div>
    )
  }

  return (
    <div className="h-[50vh]">
      <ParallaxBanner
        layers={[eventButton]}
        className="h-full"
      />
    </div>
  )
};

export default ParallaxEvents;