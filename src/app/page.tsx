import blur from "@/assets/blur.svg";
import personal from "@/assets/me.svg";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  MapPinHouse,
} from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiGithubLine } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Tabs } from "@/components/ui/tabs";

export default function Home() {
  const items = [
    {
      icon: <FaReact className="w-10 h-10" />,
      name: "React.js",
    },
    {
      icon: <TbBrandNextjs className="w-10 h-10" />,
      name: "Next.js",
    },
    {
      icon: <RiGithubLine className="w-10 h-10" />,
      name: "Github",
    },
    {
      icon: <SiNestjs className="w-10 h-10" />,
      name: "Nest.js",
    },
    {
      icon: <FaNodeJs className="w-10 h-10" />,
      name: "Node.js",
    },
  ];

  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <div>
          <p>
            I’m an enthusiastic individual passionate about creating exceptional
            and impactful web experiences! Currently, I work as a Full Stack
            Developer with a focus on front-end, dedicating myself to
            transforming ideas into innovative and functional solutions. I’m
            constantly seeking new opportunities to expand my knowledge and
            skills while sharing what I’ve learned to help others achieve their
            goals. I believe that the blend of creativity and technical
            expertise is essential for crafting truly memorable digital
            experiences.
          </p>
          <br />
          <p>
            In addition to my passion for programming, I have a deep curiosity
            in learning new things. I am constantly exploring different topics,
            always with the aim of expanding my knowledge in different aspects
            of life. This thirst for knowledge goes beyond technology, as I
            believe that a comprehensive understanding of the world enhances my
            ability to create meaningful digital solutions. With the fact that I
            am very communicative, which allows me to easily connect with other
            people, whether collaborating on projects or simply sharing ideas
            and experiences.
          </p>
          <br />
          <span>
            {" "}
            &quot;It&#39;s not what you do, but how you do it that defines the
            impact you leave.&quot;
          </span>
          <br />
          <br />
        </div>
      ),
    },
    {
      title: "Career and Education",
      value: "careerEducation",
      content: (
        <div className="border flex flex-col">
          <div className="flex">
            <div id="leftSide" className="border p-8 w-[30%]">
              <h2 className="text-xl font-bold">Career</h2>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Full Stack Developer</strong> - Segalas Alimentos, Blumenau,
                  Santa Catarina, Brazil (September 2021 - Present)
                </li>
                <li>
                  <strong>Software Engineer</strong> - Elotech, Blumenau, Santa Catarina,
                  Brazil (June 2021 - August 2021)
                </li>
                <li>
                  <strong>Software Engineer</strong> - Everis, Blumenau, Santa Catarina,
                  Brazil (March 2021 - June 2021)
                </li>
                <li>
                  <strong>Frontend Developer</strong> - Everis, Blumenau
                  </li>
                  </ul>
            </div>
            <div id="rightSide" className="flex-1"></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-screen h-screen">
      <div className="absolute top-0 w-full h-full select-none pointer-events-none">
        <Image src={blur} alt="blur" className="h-3/4 w-full" />
      </div>
      <div className="w-full h-full flex flex-col items-center p-6">
        <div className="min-w-[40vw] p-4 flex items-start justify-between">
          <div className="flex items-center w-full justify-between">
            <div className="flex">
              <div className="ml-4">
                <h1 className="text-4xl font-bold">Felipe Bäer</h1>
                <p className="">Software Developer</p>
                <div className="mt-4 text-gray-300 flex items-center">
                  <BriefcaseBusiness className="w-5 h-5 mr-2" />{" "}
                  <span>
                    Work at{" "}
                    <LinkPreview url="https://www.segalas.com.br">
                      Segalas Alimentos
                    </LinkPreview>
                  </span>
                </div>
                <div className="mt-2 text-gray-300 flex items-center">
                  <MapPinHouse className="w-5 h-5 mr-2" />{" "}
                  <span>Blumenau, Santa Catarina</span>
                </div>
              </div>
            </div>
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-2 mr-4">
                <button className="bg-slate-900 border-gray-500 border p-2 rounded-lg hover:-backdrop-hue-rotate-180">
                  <Github />
                </button>
                <button className="bg-slate-900 border-gray-500 border p-2 rounded-lg hover:-backdrop-hue-rotate-180">
                  <Linkedin />
                </button>
                <button className="bg-slate-900 border-gray-500 border p-2 rounded-lg hover:-backdrop-hue-rotate-180">
                  <Mail />
                </button>
              </div>
              <Image
                src={personal}
                alt="personalImage"
                className="w-44 z-10 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="min-h-[50vh] max-h-[60vh] max-w-[40vw] p-6 mask-gradient">
          <Tabs tabs={tabs} />
        </div>
        <InfiniteMovingCards
          items={items}
          pauseOnHover={false}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
