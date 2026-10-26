"use client";
import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";
import { fadeInUP, stagger } from "../animations";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { scrollToSection } from "../../lib/scroll";
import ProjectCard from "./ProjectCard";
import ProjectsNavbar, { CategoryFilter } from "./ProjectsNavbar";

const Projects = () => {
  const [active, setActive] = useState<CategoryFilter>("all");
  const [requestedPage, setRequestedPage] = useState(1);
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  const perPage = isLargeScreen ? 6 : 3;

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((project) => project.category.includes(active)),
    [active]
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const currentPage = Math.min(requestedPage, totalPages);
  const visible = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const selectCategory = useCallback((category: CategoryFilter) => {
    setActive(category);
    setRequestedPage(1);
  }, []);

  const selectPage = (page: number) => {
    setRequestedPage(page);
    scrollToSection("projects");
  };

  return (
    <section id="projects" className="mx-auto max-w-[1250px] px-4 py-16">
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.8 }}
        className="mx-auto mt-7 h-fit w-fit"
      >
        <h2 className="btn glass cursor-default border-solid bg-base-300/50 text-xl">
          Projects
        </h2>
      </motion.div>

      <div className="mt-4">
        <ProjectsNavbar active={active} onSelect={selectCategory} />
      </div>

      <motion.div
        key={`${active}-${currentPage}`}
        className="my-3 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {visible.map((project) => (
          <motion.div
            key={project.name}
            className="col-span-1 p-2"
            variants={fadeInUP}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {totalPages > 1 && (
        <ul className="mb-1 mt-6 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <li key={page}>
                <button
                  type="button"
                  aria-current={currentPage === page ? "page" : undefined}
                  onClick={() => selectPage(page)}
                  className={`rounded px-3 py-1 ${
                    currentPage === page ? "bg-accent" : "bg-base-100"
                  }`}
                >
                  {page}
                </button>
              </li>
            )
          )}
        </ul>
      )}
    </section>
  );
};

export default Projects;
