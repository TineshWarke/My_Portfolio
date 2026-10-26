"use client";
import { memo } from "react";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { intro } from "../data";
import BackgroundVideo from "../ui/BackgroundVideo";

const typewriterOptions = {
  autoStart: true,
  loop: true,
  deleteSpeed: 0,
  delay: 30,
};

const type = (typewriter: TypewriterClass) => {
  typewriter.typeString(intro).pauseFor(120000).deleteAll(0).start();
};

const About = () => (
  <section className="p-5 pb-0">
    <div className="glass m-auto flex max-w-full flex-col overflow-hidden z-0 rounded-box p-4 opacity-90 sm:max-w-[600px] sm:p-5 md:max-w-[800px] md:p-7 lg:max-w-[1000px]">
      <div className="relative h-[340px] flex-grow overflow-hidden rounded-box sm:h-[500px] lg:h-[560px]">
        <BackgroundVideo src="/videos/game-bg-1.mp4" />
        <div className="relative h-full overflow-y-scroll scrollbar-none">
          <div className="mx-2 my-4 cursor-none rounded-box bg-base-300/80 p-2 sm:mx-4 sm:my-5 md:mx-6 md:my-6">
            <div className="px-2 text-justify font-Sofadi-One text-sm sm:px-3 sm:text-base md:px-4 md:text-lg">
              <Typewriter onInit={type} options={typewriterOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default memo(About);
