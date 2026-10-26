"use client";
import { memo, useId, useRef } from "react";
import Image from "next/image";
import { ISkills } from "../type";
import { useInView } from "../../hooks/useInView";

const RADIUS = 50;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CircularBar = ({ data: { name, level, icon } }: { data: ISkills }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const gradientId = useId().replace(/:/g, "");
  const filledOffset = CIRCUMFERENCE * (1 - parseInt(level, 10) / 100);

  return (
    <div
      ref={ref}
      className="group relative flex h-32 w-32 items-center justify-center transition-transform duration-300 hover:scale-110"
    >
      <svg
        aria-hidden="true"
        className="absolute z-10 h-full w-full -rotate-90"
      >
        <circle
          cx="50%"
          cy="50%"
          r={RADIUS}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth="20"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="absolute z-20 h-full w-full -rotate-90"
      >
        <defs>
          <linearGradient id={gradientId} gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#22ff5e" />
            <stop offset="100%" stopColor="#002200" />
          </linearGradient>
        </defs>
        <circle
          cx="50%"
          cy="50%"
          r={RADIUS}
          fill="transparent"
          stroke={`url(#${gradientId})`}
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          style={{
            strokeDashoffset: inView ? filledOffset : CIRCUMFERENCE,
            transition: "stroke-dashoffset 1.4s cubic-bezier(0.34, 1.3, 0.64, 1)",
          }}
          className="group-hover:![stroke-dashoffset:314.16px]"
        />
      </svg>

      <div className="glass absolute z-0 flex items-center justify-center rounded-full">
        <Image height={50} width={50} className="m-4" src={icon} alt={name} />
      </div>
    </div>
  );
};

export default memo(CircularBar);
