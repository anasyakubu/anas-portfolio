"use client";
import React, { useState } from "react";
import "@/styles/qualifications.css";
import SvgIcons from "./icons/SvgIcons";

const Qualifications = () => {
  const [showEducation, setShowEducation] = useState(true);

  const sections = [
    {
      type: "Education",
      items: [
        {
          id: 1,
          title: "Information Technology",
          place: "BUK, Nigeria",
          date: "2022 till date",
        },
        {
          id: 2,
          title: "Backend Development",
          place: "NYM",
          date: "2020 - 2024",
        },
        {
          id: 3,
          title: "Frontend Development",
          place: "Sololearn",
          date: "2018 - 2020",
        },

      ],
    },
    {
      type: "Work",
      items: [
        { id: 5, title: "Software Engineer", place: "NYM Technologies Limited", date: "2018 till date" },
        { id: 6, title: "Frontend Developer", place: "Belsof System", date: "2024 - 2025" },
        {
          id: 7,
          title: "Backend Intern",
          place: "Programmfy",
          date: "2024",
        },
      ],
    },
  ];

  const titleStyle = "font-bold text-lg !leading-[1.5rem]";
  const itemStyle = "font-rubik text-[#808e91] mt-3 text-sm";

  return (
    <section>
      <div className="flex justify-center py-[2.5rem]">
        <div className="my_fixed_width">
          <h2 className="text-2xl font-bold font-clash">
            Qualifications <span className="inline-block animate-bounce">💡</span>
          </h2>
          <p className="text-sm text-[#808e91] font-rubik my-3 mb-[2rem]">
            Why you should hire me
          </p>
          <div className="flex items-center justify-center">
            {sections.map((section, index) => (
              <h3
                key={section.type}
                className={`cursor-pointer px-[1.3rem] flex items-center justify-center ${showEducation === (index === 0)
                  ? "text-[#34afcb]"
                  : "text-[#a3afb2]"
                  } space-x-3 text-xl font-bold`}
                onClick={() => setShowEducation(index === 0)}
              >
                <SvgIcons
                  type={section.type.toLowerCase()}
                  width="23"
                  height="23"
                  color={
                    showEducation === (index === 0) ? "#34afcb" : "#a3afb2"
                  }
                />
                <span>{section.type}</span>
              </h3>
            ))}
          </div>
          {sections.map(
            (section, index) =>
              showEducation === (index === 0) && (
                <ul key={section.type} className="timeline">
                  {section.items.map(({ id, title, place, date }) => (
                    <li key={id} className="timeline-item">
                      <div>
                        <p className={titleStyle}>{title}</p>
                        <p className={itemStyle}>{place}</p>
                        <p className="text-sm text-[#808e91] font-rubik mt-3 inline-flex gap-1 items-center">
                          <SvgIcons
                            type="date"
                            color="#808e91"
                            width="15"
                            height="15"
                          />
                          <span>{date}</span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
