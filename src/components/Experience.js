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

  const oracleWorkProp = `Developed a SQL-based data integration system by synthesizing information from four distinct systems onto a Jira dashboard, enhancing data interpretability and supporting strategic decision-making 
Engineered a Python automation tool to process and analyze complex datasets, boosting efficiency by 25% and reducing manual error rate by 60% 
Contributed to the data integration for the Oracle CPQ database, achieving a 30% improvement in repository consistency and bolstering data integrity across over 10,000 companies
Collaborated with cross-functional engineering and business teams to optimize data exchange processes, resulting in a 15% increase in workflow efficiency 
Streamlined data consolidation efforts across multiple repositories via Confluence, resulting in a 40% improvement in data integration and consistency`;

  const aliWorkProp = `Developed a JavaScript-based fault management web platform to quickly restore operations during critical cloud service outages, enhancing user stability and boosting service reliability by 30%
Enhanced SQL-based data management, increasing data retrieval speeds by 20% and upholding cloud service stability to bolster client trust
Conducted data-driven analysis on fault data which optimized emergency processes for Alibaba Cloud
Analyzed fault data to improve emergency response efficiency by 15% and created a Python-powered visualization dashboard, which was integrated into the data reporting system, enhancing the clarity of operational insights by 25%
Led cross-functional teams to align projects with business goal, facilitating fault management retrospectives, continuous improvement cycles, and delivering a 10% increase in project satisfaction rates`;


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
              position="Configuration Analyst Intern"
              company="Oracle Corporation"
              location="United States"
              companyLink="https://www.oracle.com/"
              time="May 2023 - September 2023"
              work= {oracleWorkProp}
            />

            <Details
              position="Operation and Maintenance Assistant Engineering"
              company="Alibaba Cloud"
              location="China"
              companyLink="https://us.alibabacloud.com/"
              time="January 2021 - July 2021"
              work={aliWorkProp}
            />
            {/*}
            <Details
              position="Bio-Hackthon"
              company="Patient Safety Technology Challenge"
              location="United States"
              companyLink="https://www.patientsafetytech.com/"
              time="2023"
              work={aliWorkProp}
            />
  {*/}
          </ul>
        </div>
        </div>
    );
};

export default Experience;
