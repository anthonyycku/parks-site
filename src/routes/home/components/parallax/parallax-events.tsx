import React from 'react';
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { BsCalendarEvent } from "react-icons/all";
import eventBackground from "../../../../assets/event-background.jpg";

const ParallaxEvents = () => {
  const background: BannerLayer = {
    image: eventBackground,
    translateY: [0, 50],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true
  }

  const eventButton: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 -top-20 flex items-center justify-center flex-col">
        <button
          type="button"
          className="flex space-x-2 text-5xl px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all bg-transparent border rounded-lg cursor-pointer border-white leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-105 active:opacity-85 hover:shadow-soft-xs text-white"
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
        layers={[background, eventButton]}
        className="h-full"
      />
    </div>
  )
};

export default ParallaxEvents;