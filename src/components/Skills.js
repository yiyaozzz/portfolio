import { motion } from "framer-motion";
import React, { useRef } from "react";


const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{scale:1.05}}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  return (
<>
      <h2 className="font-bold text-8xl mt-40 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2> 
    <div
      ref={ref}
      className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      "
    >
   
        {/*}<motion.div whileHover={{scale:1.05}} className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-5 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        ">
        
      </motion.div>
  {*/}
      💡
          <Skill name="Python" x="-5vw" y="-2vw" />
          <Skill name="SQL" x="7vw" y="-6vw" />
          <Skill name="Linux" x="2vw" y="9vw" />
          <Skill name="Java" x="0vw" y="-10vw" />

          <Skill name="R" x="-16vw" y="-5vw" />
          <Skill name="Jupyter Lab" x="-16vw" y="5vw" />
          <Skill name="Agile" x="-14vw" y="12vw" />
          <Skill name="AWS" x="0vw" y="-17vw" />
          <Skill name="C" x="18vw" y="2vw" />
          <Skill name="JavaScript" x="17vw" y="9vw" />
          <Skill name="Hadoop" x="9vw" y="16vw" />
          <Skill name="MySQL" x="15vw" y="-10vw" />
          <Skill name="OpenCV" x="-2vw" y="20vw" />

          <Skill name="NextJS" x="-16vw" y="-15vw" />
          <Skill name="Huggingface" x="28vw" y="-5vw" />
          <Skill name="ETL" x="29vw" y="4vw" />
          <Skill name="MongoDB" x="10vw" y="-21vw" />
          <Skill name="Tableau" x="-5vw" y="-24vw" />

          <Skill name="Git" x="-29vw" y="-11vw" />
          <Skill name="HTML" x="-33vw" y="0vw" />
          <Skill name="Tawilwind CSS" x="-28vw" y="16vw" />
          <Skill name="Machine Learning" x="-17vw" y="26vw" />
          <Skill name="Hive" x="20vw" y="17vw" />
          <Skill name="Spark" x="10vw" y="22vw" />


    </div></>
  );
};

export default Skills;
