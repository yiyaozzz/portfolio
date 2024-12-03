import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj2 from "../../public/images/projects/microvervice_project.png";
import proj1 from "../../public/images/projects/TE_YOLO.png";
import proj3 from "../../public/images/projects/audioWaveform.jpg";
import proj4 from "../../public/images/projects/personalWebProj.png";

import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">


          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        <p className=" my-4 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-5 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
        <span className="mt-6 text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Yiyao Zhang | Projects</title>
        <meta
          name="description"
          content="Yiyao Zhang's portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-10">
          <AnimatedText
            text="Stamps"
            className="mb-12 !text-6xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-12">
              <FeaturedProject
                type="Computer Vision | YOLO | OpenCV"
                title="ML Automation for Lot History Record Digitization"
                summary="An intelligent digitization system developed using advanced AI/ML frameworks like OpenCV and YOLO, designed to automate the recognition of handwritten data on Lot History Record (LHR) sheets. Deployed on AWS Cloud, it features a user-friendly interface for seamless data conversion into the SAP system, achieving 98% detection accuracy, reducing manual processing time from 8 hours to 2 minutes, and integrating effortlessly into existing SAP workflows."
                img={proj1}
                link="https://github.com/yiyaozzz/TE-AI-Cup"
                github="https://github.com/yiyaozzz/TE-AI-Cup"
              />
            </div>    

            <div className="col-span-12">
              <FeaturedProject
                type="Microservices Architecture | RESTful APIs | Spring Boot"
                title="Real-time Order Management"
                summary="A microservices architecture using Spring Boot and Spring Cloud to enable reliable inter-service communication through synchronous and asynchronous messaging with Kafka. Developed RESTful APIs for efficient and standardized service interactions, integrated an API Gateway to ensure secure communication, and utilized the Grafana Stack (Prometheus, Loki, Tempo) for comprehensive system monitoring, observability, and performance optimization."
                img={proj2}
                link=""
                github=""
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Next.js | JavaScript| TypeScript"
                title="Personal Website"
                summary="A bespoke professional portfolio, crafted with Next JS, utilizing the dynamic capabilities of Framer-motion and the styled-components library. It features seamless page transitions, engaging background animations, and a distinctive design, all optimized for a responsive mobile experience."
                img={proj4}
                link="https://github.com/yiyaozzz/portfolio"
                github="https://github.com/yiyaozzz/portfolio"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Python"
                title="EchoGraph: From Soundbite to Sight"
                summary="Developed a utility to handle audio files and associated subtitles (SRT). Its primary function is to segment the audio according to the SRT cues and generate visual waveform displays for each section, complete with text annotations."
                img={proj3}
                link="https://github.com/yiyaozzz/audioWaveformExplorer"
                github="https://github.com/yiyaozzz/audioWaveformExplorer"
              />
            </div>

            {/*}

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Python"
                title="Audio Waveform Process Tool"
                img={proj2}
                link="https://devdreaming.com/videos/create-nft-collection-website-reactjs"
                github="https://github.com/yiyaozzz/audioWaveformExplorer"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Fashion Studio Website"
                img={proj3}
                link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                github="https://github.com/codebucks27/wibe-studio"
              />
            </div>

          {*/}
          </div>
        </Layout>
      </main>
    </>
  );
}
