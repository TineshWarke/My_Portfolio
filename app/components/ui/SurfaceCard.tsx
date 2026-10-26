import { memo, ReactNode } from "react";
import Image from "next/image";

const SurfaceCard = ({
  icon,
  alt,
  children,
}: {
  icon: string;
  alt: string;
  children: ReactNode;
}) => (
  <div className="glass m-2 flex h-auto min-h-32 items-center space-x-4 rounded-box bg-base-300/50 p-3 transition-[transform,box-shadow] duration-200 hover:-translate-y-2 hover:shadow-[0px_0px_20px_1px_rgba(255,187,118,0.50)] hover:ring-2 hover:ring-white">
    <div className="flex-shrink-0">
      <Image
        height={60}
        width={60}
        className="my-auto bg-transparent object-cover lg:ml-6 lg:mr-4"
        src={icon}
        alt={alt}
      />
    </div>
    <div className="max-w-full flex-grow pr-3">{children}</div>
  </div>
);

export default memo(SurfaceCard);
