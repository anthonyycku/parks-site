import React from 'react';
import pawit1 from '../../../../../assets/pawit.jpg';
import pawit2 from '../../../../../assets/pawit2.jpg';
import { IntersectionObserver } from "../../../../../functions/observer/intersection-observer";

const Intro = () => {
  const [refIntro, inViewIntro] = IntersectionObserver(1);
  const [refIntroImage, inViewIntroImage] = IntersectionObserver(0.2);
  const [refIntroText1, inViewIntroText1] = IntersectionObserver(1);
  const [refIntroText2, inViewIntroText2] = IntersectionObserver(1);
  const [refIntroText3, inViewIntroText3] = IntersectionObserver(1);
  const [refIntroImage2, inViewIntroImage2] = IntersectionObserver(0.2);

  const inViewOpacity = (isInView: boolean): string => {
    return `transition-all duration-1000 ${isInView ? 'opacity-1' : 'opacity-0 translate-y-4'}`;
  }

  return (
    <div className="relative flex flex-col w-full">

      <div className={`md:text-2xl md:space-x-2 flex flex-col ${inViewOpacity(inViewIntroImage)}`}>
        <h1 ref={refIntro} className={`text-center text-4xl md:text-6xl ${inViewOpacity(inViewIntro)}`}>
          Introduction
        </h1>

        <br/>

        <div className="flex space-x-2">
          <div
            className={`flex justify-center md:min-w-[200px] md:max-h-[200px] ${inViewOpacity(inViewIntroImage)}`}
            ref={refIntroImage}
          >
            <img src={pawit1} width="auto" height="auto"/>
          </div>

          <span>
            <p ref={refIntroText1} className={`${inViewOpacity(inViewIntroText1)}`}>
              Pawit was a man like no other. He had achieved a level of loneliness that no one else in the world could even fathom. He had no friends, no family, no pets, not even a houseplant to keep him company. It wasn't that he didn't want any of those things, he just couldn't seem to make any of them stick.
            </p>
            <br/>
            <p ref={refIntroText2} className={`${inViewOpacity(inViewIntroText2)}`}>
              He tried everything from online dating to befriending stray cats, but nothing seemed to work. His phone never rang, his email inbox remained empty, and the only time he ever heard his own voice was when he talked to himself in the mirror. Pawit was truly the loneliest man in the world, and as strange as it may sound, he was quite content with his solitude.
            </p>
          </span>
        </div>
      </div>

      <div className={`md:text-2xl flex flex-col ${inViewOpacity(inViewIntroText3)}`}>
        <div className="flex">
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
          <div
            className={`flex justify-center md:min-w-[200px] md:max-h-[200px] ${inViewOpacity(inViewIntroImage2)}`}
            ref={refIntroImage2}
          >
            <img src={pawit2} width="auto" height="auto"/>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Intro;