import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/aboutProfile.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Extracurricular from "@/components/Extracurricular"
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>YiyaoZhang | About </title>
        <meta name="description" content="Yiyao's portfolio" />
      </Head>
      <TransitionEffect />
      <main
        className={`flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
        {/*}
        <AnimatedText
            text="About Me"
            className="mb-16 !text-4xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
        {*/}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col w-full max-w-lg md:order-2">
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium">
                Hi👋 I&apos;m <strong>Yiyao Zhang</strong>, a technology professional with expertise in software engineering 
                and project management. Holding a B.S. in Mathematics and Computer Science
                from <strong>The Ohio State University</strong>, I’ve built a solid foundation in problem-solving,
                data analysis, and team leadership.
              </p>
              <p className="my-4 font-medium">
                At a  <strong>SaaS startup</strong> specializing in AI-powered cardiovascular monitoring, I led the development 
                of a wearable device integrated with a cloud-based platform, managing end-to-end product lifecycles using Agile 
                methodologies. At <strong>Oracle</strong>, I streamlined cloud workflows by implementing data consolidation and 
                fostering cross-functional alignment to enhance operational efficiency. At <strong>Alibaba Cloud</strong>, 
                I utilized data analysis to optimize emergency response workflows for cloud services, achieving a 15% reduction 
                in restoration times.
              </p>
              <p className="font-medium">
                Across these diverse experiences, I've learned the power of collaboration and the importance of diverse perspectives. 
                Feel free to reach out for a chat — I'm always open to discussing new ideas and sharing insights 😄
              </p>
            </div>
            <div className="relative w-full max-w-lg rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark md:order-1">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="YiyaoZhang"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>

          <Skills />
          <Experience />
          <Extracurricular />
          <Education />
        </Layout>
      </main>
    </>
  );
}



