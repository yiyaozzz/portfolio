import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, location, companyLink, time, work }) => {
  const ref = useRef(null);
  const workPoints = work.split('\n').filter(line => line.trim() !== '');
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink} 
            target={"_blank"}
          >
            @{company} 
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm ml-4" href="https://www.osu.edu/" >
          {time} | {location}
        </span>
        {/*}<p className="font-medium w-full md:text-sm"> {work}</p>
        {*/}
        <ul className="list-disc list-inside space-y-2 ml-4">
          {workPoints.map((point, index) => (
            <li key={index} className="text-base font-medium">{point}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const startupWorkProp = `Led the development of a cardiovascular wearable device integrated with an AI-driven SaaS platform, managing end-to-end product lifecycles and delivering projects 15% ahead of schedule.`;

  const oracleWorkProp = `Streamlined workflows for Oracle's CPQ cloud system by consolidating data, creating query-based dashboards, and aligning cross-functional teams to enhance decision-making and operational efficiency.`;

  const aliWorkProp = `Designed data visualization dashboards using Python and SQL to monitor system performance and optimize emergency response workflows, reducing restoration times by 15%.`;


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref}  className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
              position="Technical Product Manager"
              company="Healthcare Startup"
              location="United States"
              time="Feb 2024 - Nov 2024"
              work={startupWorkProp}
            />
            <Details
              position="Configuration Analyst Intern"
              company="Oracle"
              location="United States"
              companyLink="https://www.oracle.com/"
              time="May 2023 - September 2023"
              work= {oracleWorkProp}
            />

            <Details
              position="Operations Analyst"
              company="Alibaba Cloud"
              location="China"
              companyLink="https://us.alibabacloud.com/"
              time="July 2020 - July 2021"
              work={aliWorkProp}
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
