"use client"

import SvgIcons from "./icons/SvgIcons";
import HeroImage from "./mainComponents/HeroImage";

const Hero = () => {
  return (
    <header className="my-[5.1rem] md:my-[5.3rem] flex items-center justify-center min-h-screen relative overflow-hidden w-full lg:min-h-[100vh]">
      <div className="my_fixed_width md:flex justify-between items-center sm:pr-2 md:px-3">
        <div className="md:w-[52%] lg:w-[60%]">
          <h1 className="gradient_text text-[2.1rem] font-clash leading-[2.5rem] md:leading-[3.6rem] md:text-[3.5rem]">
            Software Engineer  <br className="md:hidden" /> & Problem Solver.
          </h1>
          <div className="font-[400] mt-[1.7rem] font-rubik pr-5 text-sm">
            <p className="gradient_text">
              I craft clean, scalable, and user-focused web applications using modern technologies across the stack.
            </p>
            <p className="gradient_text py-[1.6rem]">
              With over 4 years of experience building real-world solutions—from intuitive frontends to robust backend systems—I’ve worked on products like DailyInvoice, AskMyPDF, and SpiralEvent, helping startups, businesses, and communities bring their ideas to life.
            </p>
          </div>
          <div className="flex space-x-5">
            <a
              href="https://www.linkedin.com/in/anasdev04"
              className="rounded-full  border-2 border-[#34afcb] hover:border-green hover:bg-green"
              target="_blank"
            >
              <SvgIcons
                type="linkedin"
                height="20"
                width="20"
                color="#34afcb"
                className="m-1 hover:fill-[#061417]"
              />
            </a>
            <a
              href="https://www.twitter.com/_anasdev"
              className="rounded-full border-2 border-[#34afcb] hover:border-green hover:bg-green"
              target="_blank"
            >
              <SvgIcons
                type="twitter"
                height="20"
                width="20"
                color="#34afcb"
                className="m-1 hover:fill-[#061417]"
              />
            </a>
            <a
              href="https://www.instagram.com/_anas.dev"
              className="rounded-full border-2 border-[#34afcb] hover:border-green hover:bg-green"
              target="_blank"
            >
              <SvgIcons
                type="instagram"
                height="20"
                width="20"
                color="#34afcb"
                className="m-1 hover:fill-[#061417]"
              />
            </a>
          </div>
        </div>
        <HeroImage />
      </div>
    </header>
  );
};
export default Hero;
