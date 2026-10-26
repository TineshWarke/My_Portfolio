"use client";
import { useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { scrollToSection } from "../../lib/scroll";
import BackgroundVideo from "../ui/BackgroundVideo";

const RESUME_PDF = "/resume/Tinesh_Warake_Resume.pdf";
const TOTAL_PAGES = 2;

const buttonClass =
  "btn glass bg-base-300/50 text-xl border-solid";
const pagerClass =
  "btn glass bg-base-300/50 border-2 border-solid disabled:opacity-50";

const Resume = () => {
  const [view, setView] = useState(false);
  const [page, setPage] = useState(1);
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  const toggle = (open: boolean) => {
    setView(open);
    setPage(1);
    scrollToSection("resume");
  };

  return (
    <section id="resume" className="pt-24">
      <div className="glass m-auto min-h-[250px] max-w-[1000px] rounded-box p-7">
        <div className="relative min-h-[194px] max-w-[944px] overflow-hidden rounded-box py-16">
          <BackgroundVideo src="/videos/game-bg-2.mp4" />

          {!view && (
            <div className="relative m-auto h-fit w-fit">
              {isLargeScreen ? (
                <button
                  type="button"
                  className={`${buttonClass} mt-2`}
                  onClick={() => toggle(true)}
                >
                  Resume
                </button>
              ) : (
                <a href={RESUME_PDF} download className={`${buttonClass} mt-2`}>
                  Resume
                </a>
              )}
            </div>
          )}

          {view && (
            <div className="glass relative m-auto h-fit w-fit rounded-box py-5">
              <div className="relative mx-5 h-[998px] w-[750px] overflow-hidden rounded-box">
                <Image
                  key={page}
                  src={`/resume/page${page}.png`}
                  alt={`Resume page ${page}`}
                  fill
                  sizes="750px"
                  quality={90}
                  className="object-cover"
                />
              </div>

              <div className="mt-5 flex items-center justify-center gap-4">
                <button
                  type="button"
                  className={pagerClass}
                  onClick={() => setPage(1)}
                  disabled={page === 1}
                >
                  ← Prev
                </button>
                <span className="text-lg font-semibold">
                  Page {page} of {TOTAL_PAGES}
                </span>
                <button
                  type="button"
                  className={pagerClass}
                  onClick={() => setPage(TOTAL_PAGES)}
                  disabled={page === TOTAL_PAGES}
                >
                  Next →
                </button>
              </div>

              <div className="m-auto mt-3 grid h-fit w-fit grid-cols-2">
                <a
                  href={RESUME_PDF}
                  download
                  className={`${buttonClass} m-auto border-2`}
                >
                  Download
                </a>
                <button
                  type="button"
                  className={`${buttonClass} m-auto border-2`}
                  onClick={() => toggle(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
