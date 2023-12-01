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
  const bioHackInfoProp = `Developed a hardware and software solution for Concussion injury management, enabling clinicians to collect and transmit medical data. This reduced errors in patient handoffs by 60% and streamlined the sharing of SCAT6 evaluations
  Led software application development that enhanced medical data gathering and transfer efficiency by 90%`;
  const neuroTechInfoProp = `Developed non-invasive Brain-Computer Interface using Python and Welch's method for signal processing, and used Keras-based convolutional neural network (CNN), which advanced communication method for paralyzed patients 
  Processed electroencephalogram (EEG) data by applying Independent Component Analysis in MATLAB and refined datasets with band-pass filtering using Python, producing clean datasets essential for reliable BCI phoneme recognition`;
  const underWaterInfoProp = `Contributed to computer vision for underwater robotics by integrating OpenCV and YOLO for object detection, coupled with ROS2 to streamline system communication and enhance navigational functions
Enhanced object detection accuracy by 20% by employing rotation-invariant and multi-scale template matching with OpenCV, and systematically improved algorithmic efficiency through performance testing`;


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Extracurricular</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
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
            type="Underwater Robotics Team"
            time="2023"
            place="The Ohio State University"
            info= {underWaterInfoProp}
          />
        

        </ul>
      </div>
    </div>
  );
};

export default Extracurricular;
