import { memo } from "react";
import { IService } from "../type";
import SurfaceCard from "../ui/SurfaceCard";

const ServiceCard = ({
  service: { title, about, icon },
}: {
  service: IService;
}) => (
  <SurfaceCard icon={icon} alt={title}>
    <h4 className="text-lg font-bold md:text-xl">{title}</h4>
    <p
      className="text-justify text-sm md:text-base"
      dangerouslySetInnerHTML={{ __html: about }}
    />
  </SurfaceCard>
);

export default memo(ServiceCard);
