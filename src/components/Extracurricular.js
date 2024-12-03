import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  const infoPoints = info.split('\n').filter(line => line.trim() !== '');
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm ml-4">
          {time} | {place}
        </span>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {infoPoints.map((point, index) => (
            <li key={index} className="text-base font-medium">{point}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Extracurricular = () => {
  const ref = useRef(null);
  const TEInfoProp = `Led a cross-functional team to develop and deploy an AI-powered digitization solution for 30 manufacturing lines, reducing manual data entry time from 8 hours to 2 minutes, achieving $175,000 in annual savings, and deploying the system on AWS Cloud.`;
  const bioHackInfoProp = `Led a multidisciplinary team to develop a hardware and software solution for concussion management, reducing patient handoff errors by 60% and increasing data transfer efficiency by 90%.`;
  const neuroTechInfoProp = `Developed a non-invasive Brain-Computer Interface using Python, signal processing techniques, and a Keras-based convolutional neural network to advance communication for paralyzed patients.`;
  const underWaterInfoProp = `Enhanced underwater robotics object detection by integrating OpenCV, YOLO, and ROS2, improving algorithmic efficiency and boosting detection accuracy by 20%.`;
  const CantoneseInfoProp = `Led a 40-member team to organize large-scale cultural events and workshops, securing sponsorships to expand offerings and foster cross-cultural engagement.`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Leadership & Project</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
        <Details
            type={
              <a 
              href="https://www.te.com/en/home.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black-500 underline hover:text-black-700"
            >
              TE Connectivity World AI Cup
            </a>
            }
            time="2023 - 2024"
            place="TE Connectivity"
            info= {TEInfoProp}
          />
        <Details
            type="Bio-Hackthon"
            time="2023"
            place="AmplifyBio, The Ohio State University"
            info= {bioHackInfoProp}
          />
          <Details
            type="NeuroTechnology Team"
            time="2023"
            place="The Ohio State University"
            info= {neuroTechInfoProp}
          />
           <Details
            type={
              <a 
              href="https://org.osu.edu/osu-uwrt/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black-500 underline hover:text-black-700"
            >
              Underwater Robotics Team
            </a>
            }
            time="2022 - 2023"
            place="The Ohio State University"
            info= {underWaterInfoProp}
          />
          <Details
            type="Cantonese Club – Vice President "
            time="2021 - 2023"
            place="The Ohio State University"
            info= {CantoneseInfoProp}
          />
        

        </ul>
      </div>
    </div>
  );
};

export default Extracurricular;
