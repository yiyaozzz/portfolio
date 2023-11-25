import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>Last Updated: 
        <Link
            href="https://www.onthisday.com/day/november/11"
            target="_blank"
            className="underline underline-offset-2"
          >
             Nov 11, {new Date().getFullYear()}
          </Link>
          </span>
        <div className="flex items-center lg:py-2">
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;	</span>
          <Link
            href="https://www.linkedin.com/in/yiyao-zhang2023/"
            target="_blank"
            className="underline underline-offset-2"
          >
            Let's Connect!
          </Link>
        </div>
        {/* 
        <Link
          href="https://devdreaming.com/about"
          target="_blank"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
        */}
      </Layout>
    </footer>
  );
};

export default Footer;
