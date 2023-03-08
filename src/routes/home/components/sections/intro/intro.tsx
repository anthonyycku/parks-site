import React from 'react';
import { useInView } from "react-intersection-observer";
import pawit1 from '../../../../../assets/pawit.jpg';
import pawit2 from '../../../../../assets/pawit2.jpg';
import CornerBorder from "../../../../../global/corner-border/corner-border";
import { IntersectionObserver } from "../../../../../functions/observer/intersection-observer";

const Intro = () => {
  const [refIntro, inViewIntro] = IntersectionObserver(1);
  const [refIntroImage, inViewIntroImage] = IntersectionObserver(0.2);
  const [refIntroText1, inViewIntroText1] = IntersectionObserver(1);
  const [refIntroText2, inViewIntroText2] = IntersectionObserver(1);
  const [refIntroText3, inViewIntroText3] = IntersectionObserver(1);
  const [refIntroImage2, inViewIntroImage2] = IntersectionObserver(0.2);

  const inViewOpacity = (isInView: boolean): string => {
    return `transition-opacity duration-1000 ${isInView ? 'opacity-1' : 'opacity-0'}`
  }

  return (
    <div className="relative flex flex-col w-full space-y-6">

      <h1
        ref={refIntro}
        className={`text-center text-4xl md:text-6xl ${inViewOpacity(inViewIntro)}`}
      >
        Introduction
      </h1>

      <CornerBorder
        className={`md:text-2xl md:flex md:space-x-2 md:w-2/3 p-2 ${inViewOpacity(inViewIntroImage)}`}
      >
        <div className={`flex justify-center md:min-w-[200px] md:max-h-[200px] ${inViewOpacity(inViewIntroImage)}`}
             ref={refIntroImage}>
          <img src={pawit1} width="auto" height="auto"/>
        </div>

        <span>
          <p ref={refIntroText1} className={`${inViewOpacity(inViewIntroText1)}`}>
            Pawit had always been a solitary figure, even as a child. He struggled to connect with others, finding it
            difficult to make friends or engage in meaningful conversation. As he grew older, his isolation only
            intensified. He spent long hours alone, lost in his thoughts and disconnected from the world around him.
          </p>
          <br/>
          <p ref={refIntroText2} className={`${inViewOpacity(inViewIntroText2)}`}>
            Despite his best efforts to break free from his loneliness, Pawit found himself increasingly isolated as the
            years went by. He tried to reach out to others, but his attempts were met with rejection or indifference. He
            watched as those around him formed close bonds and built happy lives, while he remained on the outside
            looking
            in.
          </p>
        </span>
      </CornerBorder>

      <CornerBorder
        className={`md:text-2xl md:flex md:space-x-2 md:w-2/3 md:self-end md:border-black md:border-2 rounded-xl p-2 ${inViewOpacity(inViewIntroText3)}`}>
        <span>
          <p ref={refIntroText3} className={`${inViewOpacity(inViewIntroText3)}`}>
            Now, as an adult, Pawit has resigned himself to a life of loneliness. He spends his days in quiet
            contemplation, searching for meaning in a world that seems to have little use for him. Though he longs for
            connection and companionship, he knows that his chances of finding it are slim.
          </p>
          <br/>
          <p className={`${inViewOpacity(inViewIntroText3)}`}>
            Pawit is the loneliest man in the world, a lost soul adrift in a sea of humanity.
          </p>
        </span>
        <div className={`flex justify-center md:min-w-[200px] md:max-h-[200px] ${inViewOpacity(inViewIntroImage2)}`}
             ref={refIntroImage2}>
          <img src={pawit2} width="auto" height="auto"/>
        </div>
      </CornerBorder>

    </div>
  )
};

export default Intro;