"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SvgIcons from "./icons/SvgIcons";
import Project from "../../data/projects.json";
import Image from "next/image";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const tagsWrapperStyle = "my-[1rem] flex flex-wrap gap-y-3 w-[230px]";
  const tagStyle =
    "py-1 px-2 rounded-lg bg-[#061417] text-white text-[0.65rem] font-bold overflow-hidden";

  const projects = Project;

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of portfolio section
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <section id="portfolio">
      <div className="flex justify-center py-5">
        <div className="my_fixed_width">
          <h2 className="text-2xl font-bold font-clash">
            Recent Work
            <span className="inline-block animate-bounce">👨‍🍳</span>
          </h2>
          <p className="text-sm text-[#808e91] font-rubik my-3">
            Here are some of the fun and recent projects I`ve worked on
          </p>

          {/* Projects Grid */}
          <div className="grid place-items-center my-5 gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={`project-${startIndex + index}`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 },
                }}
                className="min-h-[300px] my-2 flex items-center justify-center overflow-hidden py-9 px-7 bg-[#0a1c20] w-full md:px-8 rounded-lg"
              >
                <div>
                  <div className="flex justify-center items-center mb-4">
                    <div className="relative">
                      <Image
                        src={project.projectImage}
                        alt={project.title}
                        loading="lazy"
                        className="object-contain rounded-md"
                        width="500" height="100"
                        onError={(e: any) => {
                          // Fallback for broken images
                          e.target.src = "/images/fallback.png"; // Replace with your fallback image path
                          e.target.alt = "Project image not available";
                        }}
                      />
                    </div>
                  </div>

                  <p className="text-xl text-white font-clash text-left">
                    {project.title}
                  </p>
                  <p className="text-sm font-rubik text-[#808e91] leading-[1.4rem] mt-2 text-left">
                    {project.description}
                  </p>

                  <div className={tagsWrapperStyle}>
                    {project.tags && project.tags.length > 0 &&
                      project.tags.map((tag, tagIndex) => (
                        <span key={`tag-${startIndex + index}-${tagIndex}`} className={tagStyle}>
                          {tag}
                        </span>
                      ))
                    }
                  </div>

                  <div className="flex justify-center items-center gap-3">
                    <a
                      href={project.previewLink}
                      className="bg-white rounded-md w-full mt-5 py-2 text-sm text-black space-x-3 justify-center text-center font-bold flex items-center hover:bg-gray-400 transition-colors duration-200"
                      rel="nofollow"
                      target="_blank"
                      aria-label={`Preview ${project.title}`}
                    >
                      <span>Preview</span>
                      <SvgIcons type="visibility" width="15" height="15" className="inline-block" />
                    </a>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        className="bg-white rounded-md w-[30%] mt-5 py-[0.59rem] text-sm text-black space-x-3 justify-center text-center font-bold flex items-center hover:bg-gray-400 transition-colors duration-200"
                        target="_blank"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <i className="!text-[1rem] fa-brands fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-2">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${currentPage === 1
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-[#061417] text-white hover:bg-[#0a1c20]'
                  }`}
                aria-label="Previous page"
              >
                ←
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${currentPage === pageNumber
                    ? 'bg-white text-black'
                    : 'bg-[#061417] text-white hover:bg-[#0a1c20]'
                    }`}
                  aria-label={`Go to page ${pageNumber}`}
                  aria-current={currentPage === pageNumber ? 'page' : undefined}
                >
                  {pageNumber}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${currentPage === totalPages
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-[#061417] text-white hover:bg-[#0a1c20]'
                  }`}
                aria-label="Next page"
              >
                →
              </button>
            </div>
          )}

          {/* Pagination Info */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-4">
              <p className="text-sm text-[#808e91] font-rubik">
                Showing {startIndex + 1}-{Math.min(endIndex, projects.length)} of {projects.length} projects
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;