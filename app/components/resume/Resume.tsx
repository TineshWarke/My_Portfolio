"use client";
import React, { useEffect, useState } from "react";

const Resume = () => {
  const [view, setView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div id="resume" className="pt-24">
      <div className="max-w-[1000px] m-auto rounded-box min-h-[250px] glass p-7">
        <div className="max-w-[944px] min-h-[194px] bg-game-bg-2 bg-cover rounded-box bg-center py-16">
          {!view && (
            <div className="w-fit h-fit m-auto">
              {isLargeScreen ? (
                <button
                  className="btn glass bg-base-300/50 dark:bg-transparent text-xl mt-2 dark:hover:bg-black dark:hover:text-white dark:border-black dark:hover:border-white border-solid"
                  onClick={() => {
                    setView(true);
                    setCurrentPage(1);
                    handleScroll("resume");
                  }}
                >
                  Resume
                </button>
              ) : (
                <a href="/resume/Tinesh_Warake_Resume.pdf" download>
                  <button className="btn glass bg-base-300/50 dark:bg-transparent text-xl mt-2 dark:hover:bg-black dark:hover:text-white dark:border-black dark:hover:border-white border-solid">
                    Resume
                  </button>
                </a>
              )}
            </div>
          )}
          <div
            className={`${
              view ? "h-fit py-5" : "h-0 overflow-hidden"
            } w-fit m-auto glass rounded-box`}
          >
            {/* Resume Page Display */}
            <div
              className="bg-resume-bg-1 bg-cover h-[998px] w-[750px] mx-5 rounded-box"
              style={{ backgroundImage: `url(/resume/page${currentPage}.png)` }}
            />

            {/* Page Navigation */}
            <div className="flex items-center justify-center gap-4 mt-5">
              <button
                className="btn glass bg-base-300/50 dark:bg-transparent dark:hover:bg-black dark:hover:text-white border-2 dark:border-black dark:hover:border-white border-solid disabled:opacity-50"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                ← Prev
              </button>
              <span className="text-lg font-semibold">
                Page {currentPage} of 2
              </span>
              <button
                className="btn glass bg-base-300/50 dark:bg-transparent dark:hover:bg-black dark:hover:text-white border-2 dark:border-black dark:hover:border-white border-solid disabled:opacity-50"
                onClick={() => handlePageChange(2)}
                disabled={currentPage === 2}
              >
                Next →
              </button>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 w-fit h-fit m-auto mt-3">
              <a href="/resume/Tinesh_Warake_Resume.pdf" download>
                <button className="btn glass bg-base-300/50 dark:bg-transparent text-xl m-auto dark:hover:bg-black dark:hover:text-white border-2 dark:border-black dark:hover:border-white border-solid">
                  Download
                </button>
              </a>
              <button
                className="btn glass bg-base-300/50 dark:bg-transparent text-xl m-auto dark:hover:bg-black dark:hover:text-white border-2 dark:border-black dark:hover:border-white border-solid"
                onClick={() => {
                  setView(false);
                  setCurrentPage(1);
                  handleScroll("resume");
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
