import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/vectorDatabases.png";
import blog2 from "../../public/images/articles/create loading screen in react js.jpg";
import blog3 from "../../public/images/articles/AIFundemental.webp";
import blog4 from "../../public/images/articles/RSStoHTML.jpg";
import blog5 from "../../public/images/articles/mathProof.png";
import blog6 from "../../public/images/articles/abnormalPsy.png";
import blog7 from "../../public/images/articles/quantumMechanics.jpeg";
import blog8 from "../../public/images/articles/What is higher order component in React.jpg";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Yiyao Zhang | Articles</title>
        <meta name="description" content="Yiyao Zhang's portfolio." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Welcome!😄 This blog was born from dual motivations: 1) to articulate and solidify my learning journey through writing, 2) to chronicle and share my thoughts and insights, both for personal reflection and perhaps to help others. Writing about my learnings acts as a powerful reinforcement tool. After all, true understanding comes from the ability to explain to others. The blog also serves as a personal time capsule, capturing the evolution of my ideas over time. The posts here are dynamic, constantly evolving with added insights, updated information, and refreshed visuals, and are more akin to spontaneous thoughts than polished prose. At its core, this platform is less a conventional blog and more a publicly shared journal, open for anyone who might find value in it or wish to engage in constructive debate. I deeply value open, candid discussions and critiques of ideas, as they are instrumental in intellectual growth. "
            className="no-capitalize !text-base !font-normal !text-left !leading-tight mb-16 lg:!text-lg sm:!text-md xs:!text-sm sm:mb-8"
          />
          

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="Vector Databases: A Guide to Embeddings and Searches"
              time="10 min read"
              summary="Comprehensive overview of vector databases, detailing the processes for creating and searching vector representations of data, and their applications in various AI-driven industries."
              link="https://yiyaozhang.notion.site/Vector-Databases-A-Guide-to-Embeddings-and-Searches-61c7db854cf04869b49b6adeb9458eb1?pvs=4"
            />

            <FeaturedArticle
              img={blog6}
              title="Exploring Abnormal Psychology From Diagnosis to Research Methods"
              time="20 min read"
              summary="Comprehensive exploration of abnormal psychology, examining the criteria for diagnosing mental disorders, the societal and cultural contexts that shape these definitions, and the research methods used to understand and treat them."
              link="https://yiyaozhang.notion.site/Exploring-Abnormal-Psychology-From-Diagnosis-to-Research-Methods-c137255271824804a75ee7d3879ec034?pvs=4"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Articles
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="Vector Databases: A Guide to Embeddings and Searches"
              img={blog1}
              date="October 27, 2023"
              link="https://yiyaozhang.notion.site/Vector-Databases-A-Guide-to-Embeddings-and-Searches-61c7db854cf04869b49b6adeb9458eb1?pvs=4"
            />
            <Article
              title="Glossary of Fundamental Concepts in AI"
              img={blog3}
              date="April 12, 2022"
              link="https://yiyaozhang.notion.site/Glossary-of-Fundamental-Concepts-in-AI-9065d83277724be39642df6dd81194b6?pvs=4"
            />
            <Article
              title="Convert XML RSS to HTML File Using Java"
              img={blog4}
              date="March 20, 2022"
              link="https://yiyaozhang.notion.site/Convert-XML-RSS-to-HTML-File-Using-Java-9efa5e29bd65492d881014fd43594c2a?pvs=4"
            />
            <Article
              title="Foundations of Mathematical Proof: Defining Numbers and Sets"
              img={blog5}
              date="Feburary 28, 2022"
              link="https://yiyaozhang.notion.site/Foundations-of-Mathematical-Proof-Defining-Numbers-and-Sets-430afcc39c7145c38746ea167f8d9379"
            />
            <Article
              title="Exploring Abnormal Psychology From Diagnosis to Research Methods"
              img={blog6}
              date="January 25, 2022"
              link="https://yiyaozhang.notion.site/Exploring-Abnormal-Psychology-From-Diagnosis-to-Research-Methods-c137255271824804a75ee7d3879ec034?pvs=4"
            />
            <Article
              title="The Golden Rules of Quantum Mechanics"
              date="December 25, 2021"
              img={blog7}
              link="https://yiyaozhang.notion.site/Rules-of-Quantum-Mechanics-6ae71d0c73144a31a7cb86905532999e?pvs=4"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
