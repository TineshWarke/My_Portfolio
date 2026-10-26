import { memo } from "react";
import { IExperience } from "../type";
import SurfaceCard from "../ui/SurfaceCard";

const ExperienceCard = ({
  experience: { role, description, year, image_path },
}: {
  experience: IExperience;
}) => {
  const lastIndex = description.length - 1;

  return (
    <SurfaceCard icon={image_path} alt={`${role} logo`}>
      <h4 className="text-lg font-bold md:text-xl">{role}</h4>
      {description.map((line, index) =>
        index === lastIndex ? (
          <h4 key={line} className="flex justify-between text-sm md:text-base">
            <span>{line}</span>
            <span>{year}</span>
          </h4>
        ) : (
          <h4 key={line} className="text-justify text-sm md:text-base">
            {line}
          </h4>
        )
      )}
    </SurfaceCard>
  );
};

export default memo(ExperienceCard);
