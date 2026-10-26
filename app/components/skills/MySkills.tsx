"use client";
import { skills } from "../data";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import SkillSet from "./SkillSet";
import CircularBar from "./CircularProgress";

const MySkills = () => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <section id="skills" className="m-auto w-screen p-4">
      <div className="glass m-auto h-fit w-fit items-center justify-center rounded-box bg-base-300/80 p-7">
        {isLargeScreen ? (
          <div className="relative flex items-center justify-center bg-transparent">
            <SkillSet skills={skills} />
          </div>
        ) : (
          <div>
            <h2 className="btn glass z-30 ml-9 mt-2 w-fit border-solid bg-base-300/50 text-2xl opacity-90">
              My Tech Stack
            </h2>
            <div className="relative m-2 grid w-auto grid-cols-2 items-center justify-center gap-2 bg-transparent">
              {skills.map((skill) => (
                <CircularBar key={skill.name} data={skill} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MySkills;
