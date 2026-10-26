"use client";
import { memo, MouseEvent, useEffect, useState } from "react";
import Theme from "./Theme";
import { scrollToSection } from "../../lib/scroll";

const navItems = [
  { id: "home", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "strengths", label: "Strengths" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

const navigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
  event.preventDefault();
  (document.activeElement as HTMLElement | null)?.blur();
  scrollToSection(id);
};

const NavLinks = memo(({ summaryClassName }: { summaryClassName: string }) => (
  <>
    {navItems.map(({ id, label }) => (
      <li key={id} className="font-bold">
        <a href={`#${id}`} onClick={(event) => navigate(event, id)}>
          {label}
        </a>
      </li>
    ))}
    <li>
      <details>
        <summary className={summaryClassName}>Theme</summary>
        <Theme />
      </details>
    </li>
  </>
));
NavLinks.displayName = "NavLinks";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="navbar sticky top-0 z-50 w-full bg-transparent">
      <nav
        className={`navbar sticky rounded-box shadow-xl ${
          scrolled ? "glass bg-base-300/70" : "bg-transparent"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open menu"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm glass z-[1] mt-3 w-auto rounded-box p-2 shadow"
            >
              <NavLinks summaryClassName="font-bold" />
            </ul>
          </div>
          <a
            href="#home"
            onClick={(event) => navigate(event, "home")}
            className="btn btn-ghost font-Sofadi-One text-xl"
          >
            Tinesh
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLinks summaryClassName="mr-3 font-bold" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
