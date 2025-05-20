"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import DailyInvoiceLogo from "../../public/images/dailyinvoice-logo.png"
import SpiralEventLogo from "../../public/images/spiraleE4.png";
import Image from "next/image";

const Services = () => {
  const [visibleStates, setVisibleStates] = useState(Array(6).fill(false)); // Track visibility of each service
  const refs = useRef<(HTMLDivElement | null)[]>([]); // Refs for each service block

  const pStyle = "text-sm font-rubik text-[#808e91] mt-4 leading-[1.44rem]";

  // Animation variants for each service block
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1.05 // Pop effect when visible
    }
  };

  // Set up IntersectionObserver to trigger animations when blocks are in view
  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleStates(prev => {
              const newState = [...prev];
              newState[index] = true; // Mark block as visible
              return newState;
            });
            observer.disconnect(); // Stop observing once visible
          }
        },
        { threshold: 0.1 } // Trigger when 10% of block is in view
      );

      if (ref) observer.observe(ref); // Observe the ref if available
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect()); // Clean up on unmount
    };
  }, []);

  return (
    <section>
      <div className="flex justify-center py-5">
        <div className="my_fixed_width">
          <h2 className="text-2xl font-bold font-clash">
            SaaS project
            <span className="inline-block animate-bounce">🔥</span>
          </h2>
          <p className="text-sm text-[#808e91] font-rubik my-3">
            These are some of the Saas projects I have worked on.
          </p>
          <div className="grid place-items-center my-5 gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-8">
            {[
              {
                logo: DailyInvoiceLogo,
                title: "DAILY INVOICE",
                description:
                  "I design and build beautiful websites with React Js, CSS, Tailwind, NextJs and JavaScript.",
                className: "block_left",
              },
              {
                logo: SpiralEventLogo,
                title: "SPIRAL EVENT",
                description:
                  "Integrating backend services and APIs to the frontend securely to fetch and display data in real time.",
                className: "block_right",
              },

            ].map((service, index) => (
              <motion.div
                key={index}
                ref={(el) => {
                  refs.current[index] = el;
                }} // Proper ref assignment without return
                className={`w-full h-[270px] flex items-center justify-center relative overflow-hidden px-7 font-clash bg-[#0a1c20] ${service.className}`}
                variants={itemVariants}
                initial="hidden"
                animate={visibleStates[index] ? "visible" : "hidden"}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 300,
                }} // Add spring effect
              >
                <div>
                  <Image className="w-12" src={service.logo} alt="" />
                  <h3 className="font-bold text-xl text-white w-[69%] md:w-full mt-5">
                    {service.title}
                  </h3>
                  <p className={pStyle}>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

