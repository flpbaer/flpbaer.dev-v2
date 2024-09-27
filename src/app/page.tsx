"use client";

import blur from "@/assets/blur.svg";
import personal from "@/assets/me.svg";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { LinkPreview } from "@/components/ui/link-preview";
import gsap from "gsap";
import {
  BriefcaseBusiness,
  FileOutput,
  Github,
  Linkedin,
  Mail,
  MapPinHouse,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Tabs, { Tab } from "@/components/ui/tabs";
import Timeline from "@/components/ui/timeline";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { techItems, timelineItems } from "./info/info";

export default function Home() {
  const titleRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const carrouselRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        onStart: () => {
          titleRef.current?.classList.remove("hidden-before-animation");
        },
      }
    );

    gsap.fromTo(
      aboutRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        delay: 0.5,
        onStart: () => {
          aboutRef.current?.classList.remove("hidden-before-animation");
        },
      }
    );

    gsap.fromTo(
      carrouselRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        delay: 0.8,
        onStart: () => {
          carrouselRef.current?.classList.remove("hidden-before-animation");
        },
      }
    );

    gsap.fromTo(
      blurRef.current,
      {
        opacity: 0.2,
        filter: "brightness(0.5)",
        onStart: () => {
          blurRef.current?.classList.remove("hidden-before-animation");
        },
      },
      {
        opacity: 1,
        filter: "brightness(1)",
        duration: 3,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div className="w-[99vw] h-screen">
      <div
        className="absolute top-0 w-full h-full select-none pointer-events-none hidden-before-animation"
        ref={blurRef}
      >
        <Image src={blur} alt="blur" className="h-3/4 w-full" />
      </div>
      <div className="w-full h-full flex flex-col items-center p-6">
        <div className="w-full max-w-[99vw] md:max-w-[90vw] lg:max-w-[40vw] p-4 flex flex-col items-start justify-between">
          <div
            className="flex items-center justify-between w-full hidden-before-animation"
            ref={titleRef}
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl md:text-4xl font-bold">Felipe Bäer</h1>{" "}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <FileOutput
                        onClick={() =>
                          window.open("/files/Curriculum-Felipe Baer.pdf")
                        }
                        size={18}
                        className="text-sky-700 cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>Download CV</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="">Software Developer</p>
              <div className="mt-4 text-gray-300 flex items-center">
                <BriefcaseBusiness className="w-5 h-5 mr-2" />
                <span>
                  Work at{" "}
                  <LinkPreview url="https://www.segalas.com.br">
                    Segalas Alimentos
                  </LinkPreview>
                </span>
              </div>
              <div className="mt-2 text-gray-300 flex items-center">
                <MapPinHouse className="w-5 h-5 mr-2" />
                <span>Blumenau, Santa Catarina</span>
              </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0 h-full">
              <div className="flex flex-col gap-2 mr-4">
                <button
                  className="bg-slate-900 border-gray-500 border p-2 rounded-lg hover:-backdrop-hue-rotate-180"
                  onClick={() => window.open("https://github.com/flpbaer")}
                >
                  <Github />
                </button>
                <button
                  className="bg-slate-900 border-gray-500 border p-2 rounded-lg hover:-backdrop-hue-rotate-180"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/flpbaer/")
                  }
                >
                  <Linkedin />
                </button>
                <button
                  className="bg-slate-900 border-gray-500 border p-2 rounded-lg hover:-backdrop-hue-rotate-180"
                  onClick={() =>
                    window.open(
                      "mailto:flpbaer@gmail.com?subject=I'm interested&body=Hi Felipe"
                    )
                  }
                >
                  <Mail />
                </button>
              </div>
              <Image
                src={personal}
                alt="personalImage"
                className="w-32 hidden md:w-44 z-10 rounded-md lg:block"
              />
            </div>
          </div>
        </div>
        <div
          className="h-[60vh] overflow-y-auto w-full max-w-[90vw] md:max-w-[60vw] lg:max-w-[40vw] p-6 mask-gradient hidden-before-animation"
          ref={aboutRef}
        >
          <Tabs>
            <Tab label="About">
              <div>
                <p>
                  I’m an enthusiastic individual passionate about creating
                  exceptional and impactful web experiences! Currently, I work
                  as a Full Stack Developer with a focus on front-end,
                  dedicating myself to transforming ideas into innovative and
                  functional solutions. I’m constantly seeking new opportunities
                  to expand my knowledge and skills while sharing what I’ve
                  learned to help others achieve their goals. I believe that the
                  blend of creativity and technical expertise is essential for
                  crafting truly memorable digital experiences.
                </p>
                <br />
                <p>
                  In addition to my passion for programming, I have a deep
                  curiosity in learning new things. I am constantly exploring
                  different topics, always with the aim of expanding my
                  knowledge in different aspects of life. This thirst for
                  knowledge goes beyond technology, as I believe that a
                  comprehensive understanding of the world enhances my ability
                  to create meaningful digital solutions. With the fact that I
                  am very communicative, which allows me to easily connect with
                  other people, whether collaborating on projects or simply
                  sharing ideas and experiences.
                </p>
                <br />
                <span>
                  {" "}
                  &quot;It&#39;s not what you do, but how you do it that defines
                  the impact you leave.&quot;
                </span>
                <br />
                <br />
              </div>
            </Tab>
            <Tab label="Career and Education">
              <div className="flex">
                <Timeline items={timelineItems} />
              </div>
            </Tab>
          </Tabs>
        </div>

        <div
          ref={carrouselRef}
          className="hidden-before-animation overflow-hidden"
        >
          <InfiniteMovingCards
            items={techItems}
            pauseOnHover={false}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
