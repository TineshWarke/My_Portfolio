import { memo } from "react";
import { IEducation } from "../type";
import SurfaceCard from "../ui/SurfaceCard";

const EducationCard = ({
  education: { degree, institution, grade, year, image_path },
}: {
  education: IEducation;
}) => (
  <SurfaceCard icon={image_path} alt={`${institution} logo`}>
    <h4 className="text-lg font-bold md:text-xl">{degree}</h4>
    <h4 className="text-justify text-sm md:text-base">{institution}</h4>
    <h4 className="flex justify-between text-sm md:text-base">
      <span>{grade}</span>
      <span>{year}</span>
    </h4>
  </SurfaceCard>
);

export default memo(EducationCard);
