import { memo } from "react";
import { Category } from "../type";

export type CategoryFilter = Category | "all";

const categories: CategoryFilter[] = [
  "all",
  "Java",
  "Python",
  "Express",
  "React",
  "Next.js",
  "MySQL",
  "MongoDB",
];

const ProjectsNavbar = ({
  active,
  onSelect,
}: {
  active: CategoryFilter;
  onSelect: (category: CategoryFilter) => void;
}) => (
  <ul className="z-20 flex list-none space-x-3 overflow-x-auto px-2 py-2">
    {categories.map((category) => (
      <li key={category}>
        <button
          type="button"
          aria-pressed={active === category}
          onClick={() => onSelect(category)}
          className={`capitalize transition-colors hover:text-accent ${
            active === category ? "text-accent" : ""
          }`}
        >
          {category}
        </button>
      </li>
    ))}
  </ul>
);

export default memo(ProjectsNavbar);
